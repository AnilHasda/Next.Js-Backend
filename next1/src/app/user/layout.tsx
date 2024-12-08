import Link from "next/link";
const UserLayout=({children})=>{
  return(
    <>
        <nav>
        <ul className="flex justify-center items-center gap-10 bg-slate-900 text-white text-sm py-5">
          <Link href="/user/profile"><li>Profile </li></Link>
          <Link href="/user/dashboard"><li>Dashboard</li></Link>
          <li>About us</li>
          <li>Projects</li>
        </ul>
      </nav>
      {children}
    </>
    )
}
export default UserLayout;