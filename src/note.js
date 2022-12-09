import { WebClient, LogLevel } from "@slack/web-api";

const client = new WebClient(
  "xoxp-209991238290-4225314667782-4461902166263-94415e7bc0dc138a9bb3e16e6e8313df",
  {
    // LogLevel can be imported and used to make debugging simpler
    // logLevel: LogLevel.DEBUG
  }
);

export default async function note(req, res) {
  // const commandArray = tokenizeString(req.body.text)
  // const action = commandArray[0]
  const trigger_id = req.body.trigger_id;

  console.log(req.body);

  const view = {
    title: {
      type: "plain_text",
      text: "reporto",
      emoji: true,
    },
    submit: {
      type: "plain_text",
      text: "Submit",
      emoji: true,
    },
    type: "modal",
    close: {
      type: "plain_text",
      text: "Cancel",
      emoji: true,
    },
    blocks: [
      {
        type: "actions",
        elements: [
          {
            type: "users_select",
            placeholder: {
              type: "plain_text",
              text: "Select a user",
              emoji: true,
            },
            initial_user: "U12345678",
            action_id: "actionId-1",
          },
          {
            type: "channels_select",
            placeholder: {
              type: "plain_text",
              text: "Select a channel",
              emoji: true,
            },
            initial_channel: "C12345678",
            action_id: "actionId-2",
          },
        ],
      },
      {
        type: "input",
        element: {
          type: "plain_text_input",
          multiline: true,
          action_id: "plain_text_input-action",
        },
        label: {
          type: "plain_text",
          text: "Label",
          emoji: true,
        },
      },
    ],
  };

  try {
    // await ack();
    await client.views.open({ trigger_id, view });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }
}
