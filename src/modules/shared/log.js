const colors = {
  blue: "\x1b[34m",
  red: "\x1b[31m",
  green: "\x1b[32m",
  cyan: "\x1b[36m",
  yellow: "\x1b[33m",
};

const write = (color, msg, newLine = 1, space = 0) => {
  const { stdout } = process;

  stdout.write(
    `${" ".repeat(space)}${color}${msg}${color}${"\n".repeat(newLine)}`
  );
};

const message = (...args) => write(colors.blue, ...args);

const warning = (...args) => write(colors.yellow, ...args);

const error = (...args) => write(colors.red, ...args);

const success = (...args) => write(colors.green, ...args);

const text = (...args) => write(colors.cyan, ...args);

const clear = () => {
  console.clear();
};

export const log = {
  message,
  error,
  success,
  clear,
  text,
  warning,
};
