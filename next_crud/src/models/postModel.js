import mongoose,{Schema} from "mongoose"
const postSchema=new Schema({
  title:{
    type:String,
    required:true
  },
  body:{
    type:String,
    required:true
  }
});
export const postModel=mongoose.models.postModel || mongoose.model("postModel",postSchema);