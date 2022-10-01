const etag = require('etag')
const items = require("./mock/items.json")
const ETag = `W/${etag(JSON.stringify(items))}`

module.exports = (req, res) => {
  if (req.headers["if-none-match"] === ETag) {
    res.status(304).send()
    return
  } else {
    res.setHeader('ETag', ETag)
      .status(200)
      .send(items);
  }

}