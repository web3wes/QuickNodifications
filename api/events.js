import { challenge } from "./event_handler/challenge";

module.exports = async (req, res) => {
  var type = req.body.type;

  if (type === "url_verification") {
    await challenge(req, res);
  }
};
