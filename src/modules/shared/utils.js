import { access, stat } from "fs/promises";

const divider = 1000;

export const exist = async (path) => {
  try {
    await access(path);

    return true;
  } catch {
    return false;
  }
};

export const isDirectory = async (current) => {
  try {
    const stats = await stat(current);

    return stats.isDirectory();
  } catch {
    return false;
  }
};

const filNameRegExp = new RegExp('[/\\\\:?"<>|]+');

export const checkFileName = (name) => filNameRegExp.test(name);

export const mathFreq = (speed) => Math.round((speed * 100) / divider) / 100;
