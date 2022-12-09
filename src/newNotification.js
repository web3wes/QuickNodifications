const { Modal, Blocks, Elements, Bits } = require("slack-block-builder");

module.exports = () => {
  return Modal({
    title: "Notify VIPs",
    submit: "Send",
    callbackId: "newNotification",
  })
    .blocks(
      Blocks.Input({
        label: "Select Chain",
        blockId: "chainSelection",
      }).element(
        Elements.StaticSelect({ placeholder: "SEV0 on:" })
          .actionId("chain")
          .options(
            Bits.Option({ text: "BSC", value: "01" }),
            Bits.Option({ text: "ETH", value: "02" }),
            Bits.Option({ text: "MATIC", value: "03" }),
            Bits.Option({ text: "SOL", value: "04" }),
            Bits.Option({ text: "ALGO", value: "05" }),
            Bits.Option({ text: "ARB", value: "06" }),
            Bits.Option({ text: "AVAX", value: "07" }),
            Bits.Option({ text: "BTC", value: "08" }),
            Bits.Option({ text: "CELO", value: "09" }),
            Bits.Option({ text: "FTM", value: "10" }),
            Bits.Option({ text: "XDAI", value: "11" }),
            Bits.Option({ text: "ONE", value: "12" }),
            Bits.Option({ text: "OP", value: "13" }),
            Bits.Option({ text: "PALM", value: "14" }),
            Bits.Option({ text: "LUNA", value: "15" }),
          ),
      ),
      Blocks.Input({ label: "Send as:", blockId: "userSelect" }).element(
        Elements.UserSelect({
          actionId: "sender",
        }).initialUser(currentUser),
      ),
      Blocks.Input({ label: "Message", blockId: "message" }).element(
        Elements.TextInput({
          placeholder:
            "Create the notification you would like to send to our Priority channels",
          multiline: "true",
          actionId: "notification"
        }),
      ),
    )
    .buildToJSON();
};


// {
// 	"type": "modal",
// 	"title": {
// 		"type": "plain_text",
// 		"text": "QuickNodifications",
// 		"emoji": true
// 	},
// 	"submit": {
// 		"type": "plain_text",
// 		"text": "Submit",
// 		"emoji": true
// 	},
// 	"close": {
// 		"type": "plain_text",
// 		"text": "Cancel",
// 		"emoji": true
// 	},
// 	"blocks": [
// 		{
// 			"type": "section",
// 			"text": {
// 				"type": "mrkdwn",
// 				"text": "Select Network"
// 			},
// 			"accessory": {
// 				"type": "static_select",
// 				"placeholder": {
// 					"type": "plain_text",
// 					"text": "——",
// 					"emoji": true
// 				},
// 				"options": [
// 					{
// 						"text": {
// 							"type": "plain_text",
// 							"text": "Binance Smart Chain",
// 							"emoji": true
// 						},
// 						"value": "BSC"
// 					},
// 					{
// 						"text": {
// 							"type": "plain_text",
// 							"text": "*this is plain_text text*",
// 							"emoji": true
// 						},
// 						"value": "value-1"
// 					},
// 					{
// 						"text": {
// 							"type": "plain_text",
// 							"text": "*this is plain_text text*",
// 							"emoji": true
// 						},
// 						"value": "value-2"
// 					}
// 				],
// 				"action_id": "static_select-action"
// 			}
// 		}
// 	]
// }