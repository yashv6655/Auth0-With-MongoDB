const express = require("express");
const router = new express.Router();

router.post("/user", (req, res) => {
  console.log(req.body.sub);
});

module.exports = router;
