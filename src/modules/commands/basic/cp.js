import { createWriteStream, createReadStream } from "fs";
import { resolve, basename } from "path";

import directoryChanger from "../../shared/directoryChanger.js";
import { exist, isDirectory } from "../../shared/utils.js";
import { log } from "../../shared/log.js";

const { error, warning, success } = log;
const { getCurrentDir } = directoryChanger;

export const cp = async (dataString, needLogging = true) => {
  if (!dataString || dataString.split(" ").length !== 2) {
    needLogging &&
      error(
        "Invalid input: Path/filename and pat to new directory must be specified!"
      );
    needLogging &&
      warning("FORMAT: [cp] [path_to_file] [path_to_new_directory]", 2);
    return false;
  }

  const currentDir = getCurrentDir();
  const [pathToFile, pathToNewDir] = dataString.split(" ");
  const pathFrom = resolve(currentDir, pathToFile);

  if (!(await exist(pathFrom))) {
    error(`Invalid input: File (${pathFrom}) does not exist!`, 2);
    return false;
  }
  if (await isDirectory(pathFrom)) {
    error(`Invalid input: It is not a file, it is a folder (${pathFrom})!`, 2);
    return false;
  }

  const fileName = basename(pathFrom);
  const dirTo = resolve(currentDir, pathToNewDir);

  if (!(await exist(dirTo))) {
    error(`Invalid input: The path (${dirTo}) does not exist!`, 2);
    return false;
  }
  if (!(await isDirectory(dirTo))) {
    error(`Invalid input: It is not a folder, it is a file (${dirTo})!`, 2);
    return false;
  }

  const pathTo = resolve(dirTo, fileName);

  if (await exist(pathTo)) {
    error(`Invalid input: File in this path (${pathTo}) already exists!`, 2);
    return false;
  }

  const readStream = createReadStream(pathFrom);

  try {
    const writeStream = createWriteStream(pathTo);
    readStream.pipe(writeStream);

    return new Promise((resolve) => {
      readStream.on("end", () => {
        needLogging && success("File copied!", 2);

        resolve(true);
      });
    });
  } catch {
    needLogging && error("Operation failed: File copy error!", 2);
  }
};
