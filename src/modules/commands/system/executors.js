import { arch, cpus, EOL } from "os";

import directoryChanger from "../../shared/directoryChanger.js";
import { getArgs } from "../../shared/args.js";
import { log } from "../../shared/log.js";
import { mathFreq } from "../../shared/utils.js";

const { warning } = log;
const { getHomeDir } = directoryChanger;

const args = getArgs();

export const executorEOL = () => {
  const EOLAsStr = JSON.stringify(EOL).replace(/^.|.$/g, "");

  warning(`EOL: ${EOLAsStr}`, 2);
};

export const executorCpus = () => {
  const cpusInfo = cpus();
  const cpusCount = cpusInfo.length;

  warning(`CPU count: ${cpusCount}`);

  const logCpuInfo = (cpu, index) => {
    const cpuInfoAsStr = `CPU-${index}: ${mathFreq(cpu.speed)} GHz`;

    warning(cpuInfoAsStr, index === cpusCount - 1 ? 2 : 1);
  };

  cpusInfo.forEach(logCpuInfo);
};

export const executorHomeDir = () => {
  warning(`HOMEDIR: ${getHomeDir()}`, 2);
};

export const executorUserName = () => {
  warning(`USERNAME: ${args.username}`, 2);
};

export const executorArchitecture = () => {
  warning(`ARCHITECTURE: ${arch()}`, 2);
};
