import mongoose from "mongoose";

const doctorProfileSchema = new mongoose.Schema(
  {
    handlingPatient: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
      index: true,
    }],

    specialization: {
      type: String,
      required: true,
      trim: true,
    },

    qualification: {
      type: String,
      required: true,
      trim: true,
    },

    experienceYears: {
      type: Number,
      required: true,
      min: 0,
    },

    medicalRegistrationNumber: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    workinghospitalName: {
      type: String,
      trim: true,
      
    },

    // consultationModes: {
    //   type: [String],
    //   enum: ["CHAT", "AUDIO", "VIDEO"],
    //   default: ["CHAT"],
    // },

    availabilityStatus: {
      type: String,
      enum: ["ONLINE", "OFFLINE"],
      default: "OFFLINE",
    },

    consultationFee: {
      type: Number,
      min: 0,
    },

    rating: {
      type: Number,
      min: 0,
      max: 5,
      default: 0,
    },

    verifiedByAdmin: {
      type: Boolean,
      default: false,
    },

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Doctor ||
  mongoose.model("Doctor", doctorProfileSchema);
