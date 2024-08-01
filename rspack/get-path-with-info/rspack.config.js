module.exports = {
  entry: "./index.js",
  plugins: [{
    apply(compiler) {
      compiler.hooks.thisCompilation.tap("MyPlugin", compilation => {
        const p = compilation.getPathWithInfo("[contenthash]-[fullhash].js", {
          contentHash: "xxx1",
          hash: "xxx2"
        });
        console.log(p);
      });
    }
  }]
};