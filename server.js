const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = 8080;

app.use(cors());

app.use(bodyParser.text({ type: "application/xml" }));

app.post("/xml-response", (req, res) => {
  const xmlData = req.body;

  res.set("Content-Type", "application/xml");

  res.send(xmlData);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
