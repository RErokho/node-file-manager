import { cp } from "./cp.js";
import { rm } from "./rm.js";
import { log } from "../../shared/log.js";

const { error, warning, success } = log;

export const mv = async (dataString) => {
  if (!dataString || dataString.split(" ").length !== 2) {
    error(
      "Invalid input: Path/filename and path to new directory must be specified!"
    );
    warning("FORMAT: [mv] [path_to_file] [path_to_new_directory]", 2);
    return;
  }

  try {
    const copySuccess = await cp(dataString, false);
    if (!copySuccess) {
      return;
    }

    const removeSuccess = await rm(dataString.split(" ")[0], false);
    if (!removeSuccess) {
      return;
    }

    success("File moved", 2);
  } catch {
    error("Operation failed: File move error!", 2);
  }
};
