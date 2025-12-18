import mongoose from "mongoose";
const Schema = new mongoose.Schema;
const citizenSchema = Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    phoneNumber: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },

    email: {
      type: String,
      lowercase: true,
      trim: true,
      sparse: true, 
      unique : true,
    },

    password: {
      type: String,
      select: false, 
    },

    // authProvider: {
    //   type: String,
    //   enum: ["LOCAL", "GOOGLE", "OTP"],
    //   default: "LOCAL",
    // },

    // languagePreference: {
    //   type: String,
    //   default: "en",
    // },

    location:{
        type : Schema.Type.ObjectId,
        ref : "Location",
    } ,

    isVerified: {
      type: Boolean,
      default: false,
    },
    
  },
  {
    timestamps: true, 
  }
);

export default mongoose.models.Citizen || mongoose.model("Citizen", citizenSchema);