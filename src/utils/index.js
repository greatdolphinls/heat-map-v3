import { WINDOW_WIDTH, WINDOW_HEIGHT } from "@constants";

const getScale = (widthCount, heightCount) => {
  const margin = 20;
  const result = {
    width: WINDOW_WIDTH / widthCount - margin,
    height: (WINDOW_HEIGHT - 135) / heightCount - margin
  };
  return result;
};

export { getScale };
