require("dotenv").config();
const express = require("express");
const massive = require("massive");
const CTRL = require("./controller");

const { CONNECTION_STRING } = process.env;
const app = express();
app.use(express.json());

massive(CONNECTION_STRING).then(dbInstance => {
  app.set("db", dbInstance);
  console.log("data connected");
});

app.get("/api/houses", CTRL.sendHouses);
app.post("/api/houses", CTRL.addHouse);
app.delete("/api/houses/:id", CTRL.deleteHouse);

const PORT = 4000;
app.listen(PORT, () => console.log(`server listening on port: ${PORT}.`));
