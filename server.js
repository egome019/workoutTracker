const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 8080;

const db = require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {useNewUrlParser: true});

// API Routes
// find all route
app.get("/api/workout", (req, res) => {
    db.workout.find({}, (err, data) => {
        if (err) {
            res.send(err);
        } else {
            res.send(data);
        }
    });
});

// create route
app.get("/api/workout", (req, res) => {
    db.workout.create(req.body, (err, data) => {
        if (err) {
            res.send(err)
        } else {
            res.send(data)
        }
    });
});


app.listen(PORT, () => {
    console.log(`Application is running on port: ${PORT}.`)
})
