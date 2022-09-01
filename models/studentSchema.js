const mongoose = require("mongoose");
const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  address: String,
  status: {
    type: String,
    enum: ["active", "inactive"],
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
// Mongoose Instance Method /custom method /active student
studentSchema.methods = {
  findActive: () => {
    return mongoose.model("Student").find({ status: "active" });
  },
  findActiveCallback: (cb) => {
    return mongoose.model("Student").find({ status: "active" }, cb);
  },
};
// Statics methods note: ( statics method always will be old function structures )
studentSchema.statics = {
  findByJs: function(){
    return this.find({ name: /jyoti/i });
  },
};

module.exports = studentSchema;
