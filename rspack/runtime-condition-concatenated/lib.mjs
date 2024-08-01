import { defer } from "report_basic";
import { foo } from "./other.cjs"; 

const perfmonitorInitPromise = defer();
/** 性能监控是否完成,10s内没有完成也会被resolve */
const aaa =
  () => Promise.race([
    perfmonitorInitPromise.promise,
    sleep10sPromise
  ]);

const bbb = foo;

export {
  aaa, bbb
};