const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

// Import Model/Schema  and create Model
const studentSchema = require("../models/studentSchema");
const Student = new mongoose.model("Student", studentSchema);

// Get ALl The Student
router.get("/", (req, res) => {
  Student.find({ status: "active" })
    .select({
      date: 0,
    })
    .limit(3)
    .exec((err, data) => {
      if (err) {
        res.status(500).json({
          error: "There was server side error",
        });
      } else {
        res.status(200).json({
          result: data,
          message: "success",
        });
      }
    });
});
// instance / custom method
router.get("/active", async (req, res) => {
  try {
    const std = new Student();
    const data = await std.findActive();
    res.status(200).json({
      result: data,
      message: "Success",
    });
  } catch (err) {
    res.status(500).json({
      error: "There was server side error",
    });
  }
});
// Get a single Student by id
router.get("/:id", async (req, res) => {
  try {
    const data = await Student.find({ _id: req.params.id }).clone();
    res.status(200).json({
      result: data,
      message: "Success",
    });
  } catch (err) {
    res.status(500).json({
      error: "There was server side error",
    });
  }
});
// POST/create a single Student
router.post("/", async (req, res) => {
  try {
    const newStudent = new Student(req.body);
    await newStudent.save();
    res.status(200).json({
      message: "Student record inserted successfully",
    });
  } catch (err) {
    res.status(500).json({
      error: "There was server side error",
    });
  }
});
//POST/create multiple Student
router.post("/all", (req, res) => {
  Student.insertMany(req.body, (err) => {
    if (err) {
      res.status(500).json({
        error: "There was server side error",
      });
    } else {
      res.status(200).json({
        message: "Student's All record inserted successfully",
      });
    }
  });
});
//Put Student
router.put("/:id", (req, res) => {
  Student.updateOne(
    { _id: req.params.id },
    {
      $set: {
        status: "inactive",
      },
    },
    (err) => {
      if (err) {
        res.status(500).json({
          error: "There was server side error",
        });
      } else {
        res.status(200).json({
          message: "Student record has been Updated successfully",
        });
      }
    }
  ).clone();
});
//Delete Student
router.delete("/:id", (req, res) => {
  Student.deleteOne({ _id: req.params.id }, (err) => {
    if (err) {
      res.status(500).json({
        error: "There was server side error",
      });
    } else {
      res.status(200).json({
        message: "Student record has been Deleted",
      });
    }
  }).clone();
});

module.exports = router;
