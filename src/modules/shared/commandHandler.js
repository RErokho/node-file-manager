import { commands } from "../commands/commands.js";
import { log } from "./log.js";

const { directory, basic, hash, system, zip } = commands;
const { error } = log;

const commandExecutor = {
  up: directory.up,
  cd: directory.cd,
  ls: directory.ls,

  cat: basic.cat,
  add: basic.add,
  rn: basic.rn,
  cp: basic.cp,
  mv: basic.mv,
  rm: basic.rm,

  os: system.os,

  hash: hash.hash,

  compress: zip.compress,
  decompress: zip.decompress,
};

export const handleLine = async (line) => {
  const lineData = line.split(" ");

  const command = lineData[0].trim();
  const executor = commandExecutor[command];

  let data = lineData[1] ? lineData.slice(1).join(" ") : "";

  if (executor) {
    await executor(data);
  } else {
    error(`Invalid input: Command "${command}" not found`, 2);
  }
};
