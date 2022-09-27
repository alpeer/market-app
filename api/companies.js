const companies = require("./mock/companies.json")
module.exports = (req, res) => {
  res.status(200).send(companies);
}