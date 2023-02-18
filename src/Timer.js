const Timer = () => {
  let isRunning = false;
  let startTime = 0;
  let overallTime = 0;

  const _getTimeElapsedSinceStart = () => {
    return Date.now() - startTime;
  };
  const start = () => {
    if (!isRunning) {
      isRunning = true;
      startTime = Date.now();
    }
  };
  const stop = () => {
    if (isRunning) {
      isRunning = false;
      overallTime += _getTimeElapsedSinceStart();
    }
  };
  const reset = () => {
    overallTime = 0;
    if (isRunning) {
      startTime = Date.now();
    } else {
      startTime = 0;
    }
  };
  const getTime = () => {
    if (isRunning) {
      return Math.round((overallTime + _getTimeElapsedSinceStart()) / 1000);
    }
    return Math.round(overallTime / 1000);
  };
  const getTimeString = () => {
    let time;
    if (isRunning) {
      time = Math.round((overallTime + _getTimeElapsedSinceStart()) / 1000);
    } else {
      time = Math.round(overallTime / 1000);
    }
    let timeString = '';
    timeString += Math.floor(time / 60) || '0';
    timeString += ':';
    let moduloResult = time % 60 || '0';
    if (moduloResult < 10) {
      timeString += '0';
    }
    timeString += moduloResult;
    return timeString;
  };
  return { start, stop, reset, getTime, getTimeString };
};

export default Timer;
