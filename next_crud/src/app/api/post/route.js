import {NextResponse} from "next/server";
import connect_db from "../../../lib/database/connection.js";
import {postModel} from "../../../models/postModel.js";
let connection_status;
//get all data
export const GET=async(req)=>{
  connection_status=await connect_db();
  console.log({connection_status});
  if(connection_status){
    try{
      const data=await postModel.find();
  return NextResponse.json({status:200,data},{status:200})
    }catch(error){
      console.log({error});
      return NextResponse.json({status:500,message:"database error"});
    }
  }else{
    return NextResponse.json({status:500,message:"database is not connected"});
  }
}


//creataing post
export const POST=async(req)=>{
  const data=await req.json();
  connection_status=await connect_db();
  if(connection_status){
  try{
    const response=await postModel.create(data);
    if(response){
      console.log(response);
  return NextResponse.json({message:"data inserted successfully"},{status:201});
    }
  }catch(error){
    console.log({error});
    return NextResponse.json({message:"failed to insert data"},{status:500});
  }
  }else{
    return NextResponse.json({message:"database is not connected"},{status:500});
  }
}
