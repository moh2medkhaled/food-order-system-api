const mongoose = require("mongoose");
const adminSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      trim: true,
      required: true,
    },
    lastName: {
      type: String,
      trim: true,
      required: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    phone: {
      type: String,
    },
    resetPasswordLink: {
      data: String,
      default: "",
    },
    token: {
      data: String,
      default: "",
    },
  },
  { timestamps: true } //to include createdAt and updatedAt
);

module.exports = mongoose.model("Admin", adminSchema);
