const etag = require('etag')
const companies = require("./mock/companies.json")
const ETag = etag(JSON.stringify(companies))

module.exports = (req, res) => {
  if (req.headers.etag === ETag) {
    res.status(304).send()
  } else {
    res.setHeader('ETag', ETag)
      .status(200)
      .send(companies);
  }

}