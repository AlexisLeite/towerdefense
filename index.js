const express = require("express");
const app = express();
const PORT = process.env.PORT || 3030;

let visits = 0;
app.get("*", (req, res) => {
  visits++;
  res.json({ visits, params: req.params, query: req.query });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
