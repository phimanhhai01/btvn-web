const express = require('express');
// const cors = require('cors');

const app = express();
app.use(express.json());

const students = [
    {
        id: 1,
        name: "Nguyễn Văn A",
        school: "Trung học Phổ thông Bắc Kiến Xương",
        class: "12A3",
    },
    {
        id: 2,
        name: "Trần Văn B",
        school: "Trung học Phổ thông Bắc Kiến Xương",
        class: "12A2",
    },
    {
        id: 3,
        name: "Hoàng Thị C",
        school: "Trung học Hai core",
        class: "11A6",
    },
]

// setup router
app.get("/", (req, res) => {
    res.json("Hello");
})

app.get("/students", (req, res) => {
    res.json(students);
})

app.get("/student/:id", (req, res) => {
    const id = req.params.id;
    if (id > students.length || id < 1) 
        return res.json({
            status: false,
            message: "không có thông tin của học sinh này."
        })
    res.json({
        status: true,
        data: students[id-1]
    });
})

app.get("*", (req, res) => {
    res.json({status: false, message: "Không tìm thấy..."});
})



const PORT = 8800;
app.listen(PORT, () => {
    console.log("Server running http://localhost:8800");
})