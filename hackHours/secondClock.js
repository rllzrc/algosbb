class SecondClock {
  constructor(cb) {
    this.cb = cb;
    this.seconds = 0;
    this.timerId = null;
  }
​
  start() {
    // https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval
    this.timerId = setInterval(
      () => {
        this.seconds += 1;
        // if it has gone to 61, "reset" it back to 1
        if (this.seconds === 61) this.seconds = 1;
​
        // invoke the callback with the value passed in
        this.cb(this.seconds);
​
      }, 1000, // invoke after 1000ms (1s)
    );
  }
​
  stop() {
    // clear off the setInterval
    clearInterval(this.timerId);
    // reset seconds to zero
    this.seconds = 0;
  }
}
​
// const cb = (arg) => {
//   console.log(arg);
// };
// const clock = new SecondClock(cb);
// setTimeout(clock.start.bind(clock), 2000);