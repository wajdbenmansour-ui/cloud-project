const express = require("express");

const app = express();
app.use(express.json());

let students = [
 { id: 1, name: "Ali" },
 { id: 2, name: "Sara" }
];

// GET students
app.get("/students", (req, res) => {
 res.json(students);
});

// POST student
app.post("/students", (req, res) => {
 const student = req.body;
 students.push(student);
 res.json(student);
});

// DELETE student
app.delete("/students/:id", (req, res) => {
 students = students.filter(s => s.id != req.params.id);
 res.json({ message: "Student deleted" });
});

app.listen(3000, () => {
 console.log("Server running on port 3000");
});