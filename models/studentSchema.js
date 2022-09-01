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
// note: ( Instance method always will be old function structures )
studentSchema.methods = {
  findActive: function() {
    return mongoose.model("Student").find({ status: "active" });
  },
  findActiveCallback: function(cb) {
    return mongoose.model("Student").find({ status: "active" }, cb);
  },
};
// Statics methods 
// note: ( statics method always will be old function structures )
studentSchema.statics = {
  findByJs: function(){
    return this.find({ name: /jyoti/i });
  },
};
// Query Helper 
// note: ( Query Helper always will be old function structures )
studentSchema.query = {
  ByEmail: function(email){
    return this.find({ email: new RegExp(email, "i") });
  },
  ByName: function(name){
    return this.find({ name: new RegExp(name, "i") });
  },
};

module.exports = studentSchema;
