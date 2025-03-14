const express = require("express");
const router = express.Router();
const Report = require("../models/Report");

router.post("/report", async (req, res) => {
    const { user, data } = req.body;
    const newReport = new Report({ user, data });
    await newReport.save();
    res.json({ success: true });
});

router.get("/report/:user", async (req, res) => {
    const reports = await Report.find({ user: req.params.user });
    res.json(reports);
});

module.exports = router;
