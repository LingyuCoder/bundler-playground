const Dependency = require("webpack/lib/Dependency");
const RuntimeModule = require("webpack/lib/RuntimeModule");
const RuntimeGlobals = require("webpack/lib/RuntimeGlobals");
const { JAVASCRIPT_MODULE_TYPE_AUTO, JAVASCRIPT_MODULE_TYPE_DYNAMIC, JAVASCRIPT_MODULE_TYPE_ESM } = require("webpack/lib/ModuleTypeConstants");

const CUSTOM_RUNTIME_REQUIREMENT = "__webpack_require__.sm";
const PLUGIN_NAME = "some plugin";

// 实现埋点 Dependency
class SendMessageDependency extends Dependency {
  constructor(range) {
    super();
    this.range = range;
  }
  updateHash(hash, context) {
    hash.update(JSON.stringify(this.range));
  }
}

// 实现埋点 Dependency 的 Dependency Template
class SendMessageDependencyTemplate {
  apply(dep, source, templateContext) {
    templateContext.runtimeRequirements.add(CUSTOM_RUNTIME_REQUIREMENT);
    templateContext.runtimeRequirements.add(RuntimeGlobals.require);
    source.replace(dep.range[0], dep.range[1] - 1, CUSTOM_RUNTIME_REQUIREMENT);
  }
}

// 实现埋点 Runtime Module
class SendMessageRuntimeModule extends RuntimeModule {
  constructor() {
    super("send message");
  }

  generate() {
    // 实现埋点方法
    return `${CUSTOM_RUNTIME_REQUIREMENT} = function(a) {
			console.log(a);
		}`;
  }
}

module.exports = {
  entry: {
    'index': './index'
  },
  plugins: [{
    apply(compiler) {
      compiler.hooks.compilation.tap(PLUGIN_NAME, (compilation, { normalModuleFactory }) => {
        // 注册 Dependency 的 Template
        compilation.dependencyTemplates.set(
          SendMessageDependency,
          new SendMessageDependencyTemplate()
        );

        // 监听 runtime requirements 以插入埋点 Runtime Module
        compilation.hooks.runtimeRequirementInTree
          .for(CUSTOM_RUNTIME_REQUIREMENT)
          .tap(PLUGIN_NAME, chunk => {
            compilation.addRuntimeModule(
              chunk,
              new SendMessageRuntimeModule()
            );
            return true;
          });

        // 监听各种 JS 代码解析，遇到 __send_message__ 时添加埋点依赖
        const handler = parser => {
          parser.hooks.expression
            .for("__send_message__")
            .tap(PLUGIN_NAME, expr => {
              parser.state.module.addPresentationalDependency(new SendMessageDependency(expr.range));
              return true;
            });
        };

        normalModuleFactory.hooks.parser
          .for(JAVASCRIPT_MODULE_TYPE_AUTO)
          .tap(PLUGIN_NAME, handler);
        normalModuleFactory.hooks.parser
          .for(JAVASCRIPT_MODULE_TYPE_DYNAMIC)
          .tap(PLUGIN_NAME, handler);
        normalModuleFactory.hooks.parser
          .for(JAVASCRIPT_MODULE_TYPE_ESM)
          .tap(PLUGIN_NAME, handler);
      });
    }
  }],
  mode: "development",
  devtool: false,
};
