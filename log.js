/*var winston = require('winston');

winston.remove(winston.transports.Console);
winston.add(winston.transports.Console,{timestamp:true});
winston.add(winston.transports.File,{filename:'winston-basic.log'});
module.exports=winston;

*/
const winston = require('winston')

    const logger = winston.createLogger({
        level: 'info',
        format: winston.format.json(),
        transports: [
          //
          // - Write to all logs with level `info` and below to `combined.log` 
          // - Write all logs error (and below) to `error.log`.
          //
          new winston.transports.File({timestamp:'true'}),
          new winston.transports.File({ filename: 'error.log', level: 'error' }),
          new winston.transports.File({ filename: 'D:/CloudES Automation/Reports/combined.log' })
        ]
      });
       
      //
      // If we're not in production then log to the `console` with the format:
      // `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
      // 
      if (process.env.NODE_ENV !== 'production') {
        logger.add(new winston.transports.Console({
          format: winston.format.simple()
        }));
      }

      module.exports = logger;