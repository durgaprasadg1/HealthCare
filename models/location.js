import mongoose from "mongoose";
const Schema = new mongoose.Schema;
const locationSchema = Schema(
  {
    village: {
      type: String,
      trim: true,
    },
    district: {
      type: String,
      trim: true,
    },
    state: {
      type: String,
      trim: true,
    },
    pincode: {
      type: String,
      trim: true,
    },
  },
  { _id: false }
);
export default mongoose.models.Location || mongoose.model("Location", locationSchema);