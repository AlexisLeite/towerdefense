const express = require("express");
const app = express();
const PORT = process.env.PORT || 3030;

app.get("*", (req, res) => {
  res.json({ params: req.params, query: req.query });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
