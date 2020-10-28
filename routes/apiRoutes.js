const router = require("express").Router();
const workoutDB = require("../models/workout");

// API Routes
// find all route
router.get("/api/workout", (req, res) => {
    workoutDB.find({})
    .then(dbData => {
        res.json(dbData);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

// create route
router.post("/api/workout", (req, res) => {
    workoutDB.create(req.body)
    .then(dbData => {
        res.json(dbData);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});