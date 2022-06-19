import { basename, resolve } from "path";
import { createWriteStream, createReadStream } from "fs";
import { createBrotliDecompress } from "zlib";

import directoryChanger from "../../shared/directoryChanger.js";
import { exist, isDirectory } from "../../shared/utils.js";
import { log } from "../../shared/log.js";

const { error, warning } = log;
const { getCurrentDir } = directoryChanger;

const fileExt = ".txt";
const gzExt = ".br";

export const decompress = async (commandData) => {
  if (!commandData || commandData.split(" ").length !== 2) {
    error("Invalid input: Path/filename and destination must be specified!");
    warning("FORMAT: [decompress] [path_to_file] [path_to_destination]", 2);
    return;
  }

  const currentDir = getCurrentDir();
  const [pathToFile, pathToDestination] = commandData.split(" ");
  const fullPathToFile = resolve(currentDir, pathToFile);

  if (!(await exist(fullPathToFile))) {
    error(`Invalid input: File (${fullPathToFile}) not exist!`, 2);
    return;
  }
  if (await isDirectory(fullPathToFile)) {
    error(
      `Invalid input: It is not a file, it is a folder (${fullPathToFile})!`,
      2
    );
    return;
  }

  const fileName = basename(fullPathToFile);
  const directoryPathToDestination = resolve(currentDir, pathToDestination);

  if (!(await exist(directoryPathToDestination))) {
    error(
      `Invalid input: The path (${directoryPathToDestination}) not exists!`,
      2
    );
    return;
  }
  if (!(await isDirectory(directoryPathToDestination))) {
    error(
      `Invalid input: It is not a folder, it is a file (${directoryPathToDestination})!`,
      2
    );
    return;
  }

  const reg = new RegExp(`(${gzExt}{1})$`);
  const fullPathToDestination = resolve(
    directoryPathToDestination,
    fileName.replace(reg, fileExt)
  );

  if (await exist(fullPathToDestination)) {
    error(
      `Invalid input: File in this path (${fullPathToDestination}) already exists!`,
      2
    );
    return;
  }

  const readStream = createReadStream(fullPathToFile);
  const writeStream = createWriteStream(fullPathToDestination);
  const unzip = createBrotliDecompress();

  readStream.pipe(unzip).pipe(writeStream);

  return new Promise((resolve) => {
    unzip.on("end", () => {
      warning(`File decompressed`, 2);

      resolve();
    });
  });
};
