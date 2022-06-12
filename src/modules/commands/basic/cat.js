import { resolve } from "path";
import { createReadStream } from "fs";

import directoryChanger from "../../shared/directoryChanger.js";
import { log } from "../../shared/log.js";
import { exist, isDirectory } from "../../shared/utils.js";

const { getCurrentDir } = directoryChanger;
const { error, text, warning } = log;

export const cat = async (dataString) => {
  if (!dataString || dataString.split(" ").length > 1) {
    error("Invalid input: Path/filename must be specified!");
    warning("FORMAT: [cat] [path_to_file]", 2);
    return;
  }

  const currentDir = getCurrentDir();
  const pathToFile = resolve(currentDir, dataString);

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

    warning("File content:", 1);
    readStream.on("data", (data) => {
      text(data.toString());
    });

    return new Promise((resolve) => {
      readStream.on("end", () => {
        text("");

        resolve();
      });
    });
  } catch {
    error("Operation failed: File read error!", 2);
  }
};
