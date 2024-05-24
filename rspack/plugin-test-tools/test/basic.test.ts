import { expect, test } from 'vitest'

import {
  getSimpleProcessorRunner,
  SnapshotProcessor,
  ECompilerType
} from "@rspack/test-tools";
import path from "path";


test('should run', async () => {
  const runner = getSimpleProcessorRunner(path.resolve(__dirname, "../src"), path.resolve(__dirname, "../dist"), {
    env: () => ({
      expect,
      it: () => {
        throw new Error("not support runtime test");
      },
      beforeEach: () => {
        throw new Error("not support runtime test");
      },
      afterEach: () => {
        throw new Error("not support runtime test");
      }
    })
  });

  const processor = new SnapshotProcessor({
    configFiles: ["rspack.config.js"],
    snapshot: "output.snap.txt",
    defaultOptions: () => ({}),
    name: "test",
    compilerType: ECompilerType.Rspack,
    runable: false
  });

  await runner("test", processor);
});