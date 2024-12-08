"use client";
import {useSelector} from "react-redux";
const Home=()=>{
  let {name}=useSelector(state=>state.testData);
  return(
  <>
  <div className="text-cyan-600">welcome to the next js world {name || "sir/madam"}</div>
  </>
)
}
export default Home;