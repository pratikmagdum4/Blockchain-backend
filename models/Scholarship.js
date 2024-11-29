import mongoose from "mongoose";

const scholarshipSchema = new mongoose.Schema({
  studentName: String,
  academicRecords: String,
  amountRequested: Number,
  donorAddress: String,
  status: { type: String, default: "Pending" },
});

export default mongoose.model("Scholarship", scholarshipSchema);
        