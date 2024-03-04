export const throttle = (callback: Function, delay: number) => {
  let lastTime = 0;
  return function (...args: any[]) {
    const now = new Date().getTime();
    if (now - lastTime >= delay) {
      lastTime = now;
      callback(...args);
    }
  };
};

export const interpolate = (
  value: number,
  inputRange: number[],
  outputRange: number[]
): number => {
  const [inputMin, inputMax] = inputRange;
  const [outputMin, outputMax] = outputRange;

  if (value <= inputMin) return outputMin;
  if (value >= inputMax) return outputMax;

  const percent = (value - inputMin) / (inputMax - inputMin);
  const outputValue = outputMin + percent * (outputMax - outputMin);
  return outputValue;
};
