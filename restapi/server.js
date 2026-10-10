const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/studdb',)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB', err));

const studentSchema = new mongoose.Schema({
  name: {type: String, required:true},
  age: {type: Number, required: true},
  roll: {type: Number, required: true, unique: true},
});

const Student = mongoose.model('Student', studentSchema);

app.post('/api/students', async (req, res) => {
  try {
    let student = new Student({
        name: req.body.name,
        age: req.body.age,
        roll: req.body.roll,                                                        
        course: req.body.course
    });
    student =
    await student.save();
    res.status(201).json(student);
  } catch (err) {
    res.status(400).json({
      message: "Bad Request",
      error: err.message
    });
  }
});

// Sample route
app.get('/api/students', async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json(students);
  } catch (err) {
    res.status(500).json({
      message: "Internal Server Error",
      error: err.message
    });
  }
});

app.get('/api/students/:id', async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);

    if (!student) {
      return res.status(404).json({
        message: "Student not found"
      });
    }

    res.status(200).json(student);

  } catch (err) {
    res.status(400).json({
      message: "Invalid ID",
      error: err.message
    });
  }
});

app.put('/api/students/:id', async (req, res) => {
  try {
    const student = await Student.findByIdAndUpdate(req.params.id, { name: req.body.name, age: req.body.age, roll: req.body.roll ,  course : req.body.course, }, { new: true , runValidators: true });
    if (!student) {
      return res.status(404).json({
        message: "Student not found"
      });
    }
    res.status(200).json(student);
  } catch (err) {
    res.status(400).json({
      message: "Invalid ID",
      error: err.message
    });
  }
});

app.delete('/api/students/:id', async (req, res) => {
  try {
    const student = await Student.findByIdAndDelete(req.params.id);
    if (!student) {
      return res.status(404).json({
        message: "Student not found"
      });
    }
    res.status(200).json(student);
  } catch (err) {
    res.status(500).json({
      message: "Internal Server Error",
      error: err.message
    });
  }
});

const port = process.env.PORT || 3000;
// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});