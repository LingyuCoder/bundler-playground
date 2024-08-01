import { initAllPagesTTIPerfMonitors, getTTIPerfMonitorByPage } from 'report_config';

export const initPagesTTIMonitor = () => {
  initAllPagesTTIPerfMonitors({
    evaluate: {
      first: evaluateFirstSetting,
    },
  });
};

export const getEvaluateTtiMonitor = () => 'evaluate';