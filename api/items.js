const items = require("./mock/items.json")
module.exports = (req, res) => {
  res.status(200).send(items);
}