const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

// Import Model/Schema  and create Model
const studentSchema = require("../models/studentSchema");
const Student = new mongoose.model("Student", studentSchema);

// Get ALl The Student
router.get("/", async (req, res) => {
  await Student.find({status:"active"}).select({
    _id: 0,
    _v: 0,
    date: 0
  })
  .limit(2)
  .exec((err, data)=>{
    if (err) {
      res.status(500).json({
        error: "There was server side error",
      });
    } else {
      res.status(200).json({
        result: data,
        message: "Student record inserted successfully",
      });
    }
  })
});

// Get a single Student by id
router.get("/:id", async (req, res) => {});
// POST/create a single Student
router.post("/", async (req, res) => {
  const newStudent = new Student(req.body);
  await newStudent.save((err) => {
    if (err) {
      res.status(500).json({
        error: "There was server side error",
      });
    } else {
      res.status(200).json({
        message: "Student record inserted successfully",
      });
    }
  });
  // .then(() => {
  //   res.status(201).send(newStudent);
  // })
  // .catch((e) => {
  //   res.status(400).send(e);
  // });
});

//POST/create multiple Student
router.post("/all", async (req, res) => {
  await Student.insertMany(req.body, (err) => {
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
router.put("/:id", async (req, res) => {
  await Student.updateOne(
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
  );
});
//Delete Student
router.delete("/:id", async (req, res) => {});

module.exports = router;
