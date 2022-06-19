import directoryChanger from "../../shared/directoryChanger.js";

const { goParentDir } = directoryChanger;

export const up = async () => {
  await goParentDir();
};
