
const { App, LogLevel, AwsLambdaReceiver } = require('@slack/bolt');

let logLevel;
switch (process.env.LOG_LEVEL) {
  case 'debug':
    logLevel = LogLevel.DEBUG;
    break;
  case 'info':
    logLevel = LogLevel.INFO;
    break;
  case 'warn':
    logLevel = LogLevel.WARN;
    break;
  case 'error':
    logLevel = LogLevel.ERROR;
    break;
  default:
    logLevel = LogLevel.INFO;
}

const awsLambdaReceiver = new AwsLambdaReceiver({
  signingSecret: process.env.SLACK_SIGNING_SECRET,
});

const app = new App({
    token: process.env.SLACK_BOT_TOKEN,
    receiver: awsLambdaReceiver,
    logLevel
});


// Handle the Lambda function event
module.exports.handler = async (event, context, callback) => {
  const handler = await awsLambdaReceiver.start();
  return handler(event, context, callback);
}