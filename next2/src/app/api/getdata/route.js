import {NextResponse} from "next/server";
export const GET=(req)=>{
  //request headers
  let requestHeader=new Headers(req.headers);
 // console.log({requestHeader})
 // console.log({requestHeader:req.headers})
 //get query params
 let {searchParams}=new URL(req.url);
 let data=searchParams.get('data').replace(/"/g,'');
 console.log({data});
  return NextResponse.json({status:200,message:"test message"});
}