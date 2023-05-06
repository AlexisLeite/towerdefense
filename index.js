const express = require("express");
const app = express();
const PORT = process.env.PORT || 3030;

app.get("*", (req, res) => {
  res.json(req);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
