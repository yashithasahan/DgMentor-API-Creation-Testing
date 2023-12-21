const Course = require("../models/courseModel");
const mongoose = require("mongoose");
//get all c
const getCourses = async (req, res) => {
  const courses = await Course.find({}).sort({ createdAt: -1 });

  res.status(200).json(courses);
};

//get a single c
const getCourse = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json("No such course");
  }
  const course = await Course.findById(id);
  if (!course) {
    return res.status(400).json({ error: "No such course" });
  }
  res.status(200).json(course);
};

//create new c
const createCourse = async (req, res) => {
  const { title, discription } = req.body;
  // add data to db
  try {
    const course = await Course.create({
      title,
      discription,
    });

    res.status(200).json(course);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

//delet a c

//update a c

module.exports = {
  getCourses,
  getCourse,
  createCourse,
};
