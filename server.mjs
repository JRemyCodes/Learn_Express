import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

const users = [{
    id: 1,
    name: "Joe",
    hobbies: ["Praying", "Rible Reading", "basketball", "chess"]
}, {
    id: 2,
    name: "Dan",
    hobbies: ["Praying", "Rible Reading", "Investing", "Coding"]
}];

app.get("/", (req, res) => {
    res.send("Hello friends");
});

app.get("/api/users", (req, res) => {
    res.send(users);
});

app.get("/api/users/:id", (req, res) => {
    console.log(req.params.id);
});

app.listen(port, () => {
    console.log(`Listening on port number: ${port}`);
});