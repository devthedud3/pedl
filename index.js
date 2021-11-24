const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send({ hi: "theres" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});
