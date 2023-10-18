const express = require("express");
const app = express();

const morgan = require("morgan");
app.use(morgan("short"));

const Routes = require("./routes");
app.use(express.json());

app.use("/api/v1", Routes);
app.get("/", (req, res) => {
    return res.json("Welcome to the Home Page of fortune Stores")
});

app.listen(5050, (req, res) => {
    console.log("Server is running on port 5050. Goto localhost:5050 on your browser!");
})

// just do the following in the terminal    >>$   npm install express morgan
// To run the code, type the following      >>$   node app.js 