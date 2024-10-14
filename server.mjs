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
    const parsedId = parseInt(req.params.id);
    if(isNaN(parsedId)) res.status(400).send({msg: "Bad Request: Invalid Id."});

    const findUser = users.find((user) => user.id === parsedId);
    if(!findUser) return res.status(404).send("Id (number) not found.");
    return res.send(findUser);
});

app.listen(port, () => {
    console.log(`Listening on port number: ${port}`);
});