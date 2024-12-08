"use client"
import {useRouter} from "next/navigation";
const UserProfile=()=>{
  let navigate=useRouter();
  const navigateToDashboard=()=>{
    navigate.push("/user/dashboard");
  }
  return(
    <>
      <h3>user profile</h3>
      <button onClick={navigateToDashboard}>Go to user dashboard</button>
    </>
    )
}
export default UserProfile;