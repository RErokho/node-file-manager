import { unlink } from "fs/promises";
import { resolve } from "path";

import directoryChanger from "../../shared/directoryChanger.js";
import { log } from "../../shared/log.js";
import { exist, isDirectory } from "../../shared/utils.js";

const { error, warning, success } = log;
const { getCurrentDir } = directoryChanger;

export const rm = async (dataString, needLogging = true) => {
  if (!dataString) {
    needLogging && error("Invalid input: Path/filename must be specified!");
    needLogging && warning("FORMAT: [rm] [path_to_file]", 2);
    return false;
  }

  const currentDir = getCurrentDir();
  const pathToFile = resolve(currentDir, dataString);

  if (!(await exist(pathToFile))) {
    error(`Invalid input: File (${pathToFile}) does not exist!`, 2);
    return false;
  }

  if (await isDirectory(pathToFile)) {
    error(
      `Invalid input: It is not a file, it is a folder (${pathToFile})!`,
      2
    );
    return false;
  }

  try {
    await unlink(pathToFile);
    needLogging && success("File deleted", 2);

    return true;
  } catch {
    needLogging && error("Operation failed: File deletion error!", 2);

    return false;
  }
};
