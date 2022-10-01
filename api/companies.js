const etag = require('etag')
const companies = require("./mock/companies.json")
const ETag = `W/${etag(JSON.stringify(companies))}`

module.exports = (req, res) => {
  if (req.headers["if-none-match"] === ETag) {
    res.status(304).send()
    return
  } else {
    res.setHeader('ETag', ETag)
      .status(200)
      .send(companies);
  }

}