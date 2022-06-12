import { resolve } from "path";
import { createHash } from "crypto";
import { createReadStream } from "fs";

import directoryChanger from "../../shared/directoryChanger.js";
import { exist, isDirectory } from "../../shared/utils.js";
import { log } from "../../shared/log.js";

const { error, warning } = log;
const { getCurrentDir } = directoryChanger;

export const hashCommand = async (commandData) => {
  if (!commandData || commandData.split(" ").length > 1) {
    error("Invalid input: Path/filename must be specified!");
    warning("FORMAT: [hash] [path_to_file]", 2);
    return;
  }

  const currentDir = getCurrentDir();
  const pathToFile = resolve(currentDir, commandData);

  if (!(await exist(pathToFile))) {
    error(`Invalid input: File (${pathToFile}) does not exist!`, 2);
    return;
  }

  if (await isDirectory(pathToFile)) {
    error(
      `Invalid input: It is not a file, it is a folder (${pathToFile})!`,
      2
    );
    return;
  }

  try {
    const readStream = createReadStream(pathToFile);
    const hash = createHash("sha256").setEncoding("hex");
    readStream.pipe(hash);

    return new Promise((resolve) => {
      readStream.on("end", () => {
        warning(`FILE HASH: ${hash.read()}`, 2);

        resolve();
      });
    });
  } catch {
    error("Operation failed: File hash error!", 2);
  }
};
