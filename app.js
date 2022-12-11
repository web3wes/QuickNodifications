require('dotenv').config();
const express = require("express");
const app = express();


const { App, LogLevel } = require('@slack/bolt');


const { registerListeners } = require('./listeners');

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

// Initializes your app with your bot token and signing secret
const slackbot = new App({
   token: "xoxb-209991238290-4462241183906-6aQHVWVU2OR57nB2ECqjRlxe",
    socketMode: true,
    appToken: "xapp-1-A04E9TPDXJ4-4487796119142-09a8cc1bbf33b88084fbf253f53742dfeefb12b74462aa7407a9d4227c3897b7",
    logLevel,
});

// Listens for slackbot events
registerListeners(slackbot);

(async () => {
  try {
    console.log('All models were synchronized successfully.');
    // eslint-disable-next-line no-console
    console.log('Connection has been established successfully.');
    // Start your app
    await slackbot.start();
    
    // eslint-disable-next-line no-console
    console.log('⚡️ Tasks app is running!');
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Unable to start App', error);
    process.exit(1);
  }
})();

app.listen(process.env.PORT || 3001, '0.0.0.0', () => {
  console.log("Server is running.");
});
