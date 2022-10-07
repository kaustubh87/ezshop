const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
  },
  color: {
    //#000
    type: String,
  },
});

exports.Category = mongoose.model("Category", categorySchema);
