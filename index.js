const express = require("express");
const app = express();

const db = require("./database/config");

app.get("/get-names", async (req, res) => {
  const query = await db("name").select("name.name", "name.age");
  res.json(query);
});

app.post("/add-name", async (req, res) => {
  const query = await db("name").insert({
    name: "rekar",
  });

  res.json(query);
});

app.listen(8080);
