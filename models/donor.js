import mongoose from "mongoose";
const Schema = new mongoose.Schema;
const donorSchema = Schema({
    donor : {
        type : Schema.Type.ObjectId,
        ref : "Citizen",
        required : true,

    },
    itemDonated : {
        type : String,
        required : true,
    },
    hospital : {
        type : String,
        required : true,
    }
});
export default mongoose.models.Donor || mongoose.model("Donor", donorSchema);
