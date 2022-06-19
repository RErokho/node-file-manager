import { resolve } from "path";
import { createWriteStream } from "fs";

import directoryChanger from "../../shared/directoryChanger.js";
import { exist, checkFileName } from "../../shared/utils.js";
import { log } from "../../shared/log.js";

const { error, success, warning } = log;
const { getCurrentDir } = directoryChanger;

export const add = async (dataString) => {
  if (!dataString || dataString.split(" ").length > 1) {
    error("Invalid input: Filename must be specified!");
    warning("FORMAT: [add] [new_file_name]", 2);
    return;
  }
  if (checkFileName(dataString)) {
    error('Invalid input: Name must not contain characters /\\:?"<>| ');
    return;
  }

  const currentDir = getCurrentDir();
  const pathToFile = resolve(currentDir, dataString);

  if (await exist(pathToFile)) {
    error(`Invalid input: File (${pathToFile}) already exists!`, 2);
    return;
  }

  try {
    createWriteStream(pathToFile);

    success("File created");
  } catch {
    error("Operation failed: File creation error!", 2);
  }
};
