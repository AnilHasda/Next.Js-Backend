const Profile=({params})=>{
  console.log({id:params})
  return(
    <>
      my profile {params.id}
    </>
    )
}
export default Profile;