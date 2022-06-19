import { log } from "../../shared/log.js";
import {
  executorEOL,
  executorArchitecture,
  executorCpus,
  executorHomeDir,
  executorUserName,
} from "./executors.js";

const { error, warning } = log;

const executors = {
  "--EOL": executorEOL,
  "--cpus": executorCpus,
  "--homedir": executorHomeDir,
  "--username": executorUserName,
  "--architecture": executorArchitecture,
};

export const os = (dataString) => {
  if (!dataString || !dataString.startsWith("--")) {
    error("Invalid input: Unknown command arguments!");
    warning("FORMAT: [os] [--command]", 2);
    return;
  }

  const executor = executors[dataString];

  if (executor) {
    executor();
  } else {
    error(`Invalid input: Unknown command arguments (${dataString}) for 'os'!`);
  }
};
