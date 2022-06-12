import { getArgs } from "./modules/shared/args.js";
import { handleLine } from "./modules/shared/commandHandler.js";
import directoryChanger from "./modules/shared/directoryChanger.js";
import { log } from "./modules/shared/log.js";

const { success, clear, message, error } = log;
const { getCurrentDir } = directoryChanger;
const argsData = getArgs();
clear();

if (!argsData.username) {
  error("Invalid input: You must enter username!");
  error("USE: npm run start -- [--username=user]");
  process.exit();
}

const logDefaultMessage = () => {
  success(`You are currently in ${getCurrentDir()}`, 2);
  message("Enter command: ", 0);
};

const processLine = (line) => {
  return line
    .toString()
    .replace(new RegExp("\\r?\\n", "g"), "")
    .split(" ")
    .filter((w) => w.length !== 0)
    .join(" ");
};

success(`Welcome to the File Manager, ${argsData.username}!`, 2);
logDefaultMessage();

process.stdin.on("data", async (data) => {
  const line = processLine(data);
  if (line === ".exit") {
    process.exit();
  }

  await handleLine(line);

  logDefaultMessage();
});

process.on("SIGINT", () => {
  process.exit();
});

process.on("exit", () => {
  success(`\nThank you for using File Manager, ${argsData.username}!`);
});
