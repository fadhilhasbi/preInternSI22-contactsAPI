require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const contactsRoute = require("./src/contacts/routes");
const port = process.env.PORT;
const host = process.env.HOST;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(contactsRoute);

app.get("/", (req, res) => {
  res.send();
});

app.listen(port, () => {
  console.log(`Example app listening on http://${host}:${port}`);
});
