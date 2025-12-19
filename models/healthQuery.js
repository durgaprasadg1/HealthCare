import mongoose from "mongoose";

const healthQuerySchema = new mongoose.Schema(
  {
    patientId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Citizen",
      required: true,
    },
    assignedDoctorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Doctor",
    },
    symptoms: [{
      type: String,
    }],
    description: {
      type: String,
      required: true,
    },

    urgencyLevel: {
      type: String,
      enum: ["LOW", "MEDIUM", "HIGH"],
      default: "LOW",
    },

  },
  { timestamps: true }
);

export default mongoose.models.HealthQuery ||
  mongoose.model("HealthQuery", healthQuerySchema);
