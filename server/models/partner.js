import mongoose from "mongoose";

const PartnerSchema=new mongoose.Schema({
    name:{type:String,required:true},
    phone:{type:phone,required:true,unique: true},
    email:{type:String,required:true,unique: true},
    password:{type:String,required:true,unique: true},
    isVerified: { type: Boolean, default: false },
}, { timestamps: true });

const Partner = mongoose.model('Partner', PartnerSchema);

export default Partner;