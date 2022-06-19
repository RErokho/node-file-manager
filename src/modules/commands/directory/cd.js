import directoryChanger from "../../shared/directoryChanger.js";

const { changePath } = directoryChanger;

export const cd = async (dataString) => {
  await changePath(dataString);
};
