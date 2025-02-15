const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentSchema = new Schema(
  {
    student: {
      type: {
        firstName: {
          type: String,
          required: true,
        },
        lastName: {
          type: String,
          required: true,
        },
        email: {
          type: String,
          required: true,
        },
        phone: {
          type: String,
          required: true,
        },
        password: {
          type: String,
          required: true,
        },
        age: {
          type: Number,
          required: true,
        },
        courseName: {
          type: String,
          required: true,
        },
        role: {
          type: String,
          default: "Student",
        },
        profileImg: {
          type: String,
          default: "",
        },
        IdNumber: {
          type: String,
          default: "",
        },
        tests: {
          type: [
            {
              name: {
                type: String,
                require: true,
              },
              grade: {
                type: Number,
                required: true,
              },
            },
          ],
        },
        required: false,
      },
    },
    required:false,
    creatorMessages: [{ type: Schema.Types.ObjectId, ref: "forum" }],
  },
  { timestamps: true }
);

const Student = mongoose.model("student", studentSchema);
module.exports = Student;
