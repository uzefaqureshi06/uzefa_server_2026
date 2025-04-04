import mongoose from "mongoose";
const AuthSchema = new mongoose.Schema(
   {

name:{
   type:String,
   required:true,
},
email:{
   type:String,
   required:true,
},
password:{
   type:String,
   required:true,
},
avatar:{
   type:String,
   required:true,
}

})

const auth =mongoose.model('auth' ,AuthSchema)
export default auth;