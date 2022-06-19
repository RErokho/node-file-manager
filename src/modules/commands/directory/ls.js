import directoryChanger from "../../shared/directoryChanger.js";
import { log } from "../../shared/log.js";

const { message, warning } = log;
const { getDirFiles } = directoryChanger;

export const ls = async () => {
  const files = await getDirFiles();

  if (files === null) {
  } else if (files.length > 0) {
    warning("Folder content:");

    files.forEach((file) => message(file, 1, 2));

    message("");
  } else if (files.length === 0) {
    warning("Folder is empty", 2);
  }
};
