require('dotenv').config();
const express = require("express");
const app = express();


const { App, LogLevel } = require('@slack/bolt');

// const { Sequelize } = require('sequelize');

// const sequelize = new Sequelize(process.env.DB_URI);

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
   token: "process.env.SLACK_BOT_TOKEN",
    socketMode: true,
    appToken: "process.env.SLACK_APP_TOKEN",
    logLevel,
});
registerListeners(slackbot);

(async () => {
  try {
    // await sequelize.authenticate();
    // await sequelize.sync({ force: true });
    // eslint-disable-next-line no-console
    console.log('All models were synchronized successfully.');
    // eslint-disable-next-line no-console
    console.log('Connection has been established successfully.');
    // Start your app
    await slackbot.start();

    // slackbot.shortcut('global_new_task', async ({ shortcut, ack, client, logger }) => {

    //   try {
    //     // Acknowledge shortcut request
    //     await ack();
    
    //     // Call the views.open method using one of the built-in WebClients
    //     const result = await client.views.open({
    //       trigger_id: shortcut.trigger_id,
    //       view: {
    //         type: "modal",
    //         title: {
    //           type: "plain_text",
    //           text: "My App"
    //         },
    //         close: {
    //           type: "plain_text",
    //           text: "Close"
    //         },
    //         blocks: [
    //           {
    //             type: "section",
    //             text: {
    //               type: "mrkdwn",
    //               text: "Hello Dylan! If you  are seeing this, it's because you have chosen the red pill. There is no reverting beyond this point. Onward and forward."
    //             }
    //           },
    //           {
    //             type: "context",
    //             elements: [
    //               {
    //                 type: "mrkdwn",
    //                 text: "Psssst this modal was designed using <https://api.slack.com/tools/block-kit-builder|*Block Kit Builder*>"
    //               }
    //             ]
    //           }
    //         ]
    //       }
    //     });
    
    //     logger.info(result);
    //   }
    //   catch (error) {
    //     logger.error(error);
    //   }
    // });

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
