const mongoose = require("mongoose");

const ReportSchema = new mongoose.Schema({
    user: String,
    data: Object,
});

module.exports = mongoose.model("Report", ReportSchema);
