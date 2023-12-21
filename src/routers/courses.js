const express = require("express");

const {
  createCourse,
  getCourses,
  getCourse,
} = require("../controllers/courseController");
const router = express.Router();

router.get("/", getCourses);

router.get("/:id", getCourse);

router.post("/", createCourse);

router.delete("/:id", (req, res) => {
  res.json({ msgg: " DELETE  a  course" });
});

router.patch("/:dd", (req, res) => {
  res.json({ msgg: " UPDATE  a  course" });
});

module.exports = router;
