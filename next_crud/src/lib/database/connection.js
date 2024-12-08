import mongoose from "mongoose";
const connect_db=async()=>{
  if(mongoose.connection.readyState===0){
  const DB_URL=process.env.DB_URL;
  const configuration={
    dbName:process.env.DB_NAME,
    user:process.env.USER,
    pass:process.env.PASS,
  }
  try{
    let response=await mongoose.connect(DB_URL,configuration);
   // console.log({response});
    console.log("connected");
    return true;
  }catch(error){
    console.log("Failed to connect database",error);
    return false;
  }
  }else{
    console.log("database already connected");
    return true;
  }
}
export default connect_db;