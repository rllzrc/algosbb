// ** Day 1 of 30 Days of Code Challenge Part X -- August Edition! 
// ** --> { Log Rate Limiter! }

// T A S K !!

// Design a logger system that receive stream of messages along with its timestamps, each message should be printed if and only if it is not printed in the last 10 seconds.

// Given a message and a timestamp (in seconds granularity), return true if the message should be printed in the given timestamp, otherwise returns false.

// It is possible that several messages arrive roughly at the same time.

/**
 * Initialize your data structure here.
 */
//

// create Logger class
class Logger {
  constructor() {
    this.map = new Map();
  }

  shouldPrintMessage(timestamp, message) {
    // hold on to previous message
    const last = this.map.get(message);
    // check if msg is already in map
    if(!this.map.has(message) || timestamp - last >= 10) {
      this.map.set(message, timestamp);
      return true;
    }
    return false;
  }
};

/**
 * Returns true if the message should be printed in the given timestamp, otherwise returns false.
        If this method returns false, the message will not be printed.
        The timestamp is in seconds granularity. 
 * @param {number} timestamp 
 * @param {string} message
 * @return {boolean}
 */
//

// /**
//  * Initialize your data structure here.
//  */
// var Logger = function() {
    
// };

// Logger.prototype.shouldPrintMessage = function(timestamp, message) {
//   const last = this.map.get(message);

//   // check if msg exists
//   if(this.map.has(message) || timestamp - last >= 10) {
//     this.map.set(message, timestamp);
//     return true;
//   }
//   return false;
// };

/** 
 * Your Logger object will be instantiated and called as such:
 * var obj = new Logger()
 * var param_1 = obj.shouldPrintMessage(timestamp,message)
 */