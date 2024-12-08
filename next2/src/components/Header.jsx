"use client";
import Link from "next/link";
import {useDispatch} from "react-redux";
import {updateData} from "../lib/redux/slices.js";
const Header=()=>{
  let dispatch=useDispatch();
  const updateName=()=>{
    dispatch(updateData({name:"Sarkar"}));
  }
  return(
    <nav className="h-10 w-full bg-purple-800 text-white flex justify-center items-center">
    <ul className="flex gap-5">
    <Link href="/"><li>Home</li></Link>
    <Link href="/services"> <li>Services</li></Link>
    <Link href="/projects"><li>Projects</li></Link>
    <Link href="#"><li onClick={updateName}>update</li></Link>
    </ul>
    </nav>
    )
}
export default Header;