import mongoose from "mongoose";

const healthQuerySchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    

    description: {
      type: String,
      required: true,
    },

    symptoms: {
      type: [String],
    },

    category: {
      type: String,
      trim: true,
    },

    urgencyLevel: {
      type: String,
      enum: ["LOW", "MEDIUM", "HIGH"],
      default: "LOW",
    },

    status: {
      type: String,
      enum: ["OPEN", "ASSIGNED", "CLOSED"],
      default: "OPEN",
    },

    assignedDoctorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Doctor",
    },
  },
  { timestamps: true }
);

export default mongoose.models.HealthQuery ||
  mongoose.model("HealthQuery", healthQuerySchema);
