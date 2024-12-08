import {NextResponse} from "next/server";
import connect_db from "../../../../lib/database/connection.js";
import {postModel} from "../../../../models/postModel.js";
let connection_status;
//getting single data
export const GET=async(req,{params})=>{
  connection_status=await connect_db();
  const {id}=await params;
  console.log({connection_status,id});
  if(connection_status){
    try{
      const data=await postModel.find({
        _id:id
      });
  return NextResponse.json({status:200,data},{status:200})
    }catch(error){
      console.log({error});
      return NextResponse.json({status:500,message:"database error"});
    }
  }else{
    return NextResponse.json({status:500,message:"database is not connected"});
  }
}
//update single data
export const PATCH=async(req,{params})=>{
  connection_status=await connect_db();
  const data=await req.json();
  const {id}=await params;
  if(connection_status){
    try{
      const response=await postModel.findByIdAndUpdate(id,{$set:data},{new:true,rawResult:true});
      if(response){
        console.log({response})
  return NextResponse.json({status:200,message:"data updated successfully"},{status:200});
      }
    }catch(error){
      console.log({error});
      return NextResponse.json({status:500,message:"failed to update data"},{status:500});
    }
  }else{
    return NextResponse.json({status:500,message:"database is not connected"});
  }
}
//delete single data
export const DELETE=async(req,{params})=>{
  connection_status=await connect_db();
  const {id}=await params;
  if(connection_status){
    try{
      const response=await postModel.deleteOne({
        _id:id
      },{rawResult:true});
      if(response.deletedCount>0){
        console.log({response});
  return NextResponse.json({status:200,message:"data deleted successfully"},{status:200});
      }
    }catch(error){
      console.log({error});
      return NextResponse.json({status:500,message:"failed to delete data"},{status:500});
    }
  }else{
    return NextResponse.json({status:500,message:"database is not connected"});
  }
}

