const express = require("express");
const router = express.Router();

// get request / get todo
router.get("/", (req, res) => {
  res.status(200).json({
    title: "Get todo",
  });
});
// post request / add todo
router.post("/", (req, res) => {
  res.status(200).json({
    title: "Set todo",
  });
});
// put request / edit todo
router.put("/:id", (req, res) => {
  res.status(200).json({
    title: `Update todo ${req.params.id}`,
  });
});
// delete request / delete todo
router.delete("/:id", (req, res) => {
  res.status(200).json({
    title: `Delete todo ${req.params.id}`,
  });
});

module.exports = router;
