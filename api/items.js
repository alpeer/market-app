const etag = require('etag')
const items = require("./mock/items.json")
const ETag = etag(JSON.stringify(items))

module.exports = (req, res) => {
  res.setHeader('ETag', ETag)
    .status(200)
    .send(items)
}