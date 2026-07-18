import Sidebar from "../components/dashboard/Sidebar"
import { Outlet } from "react-router-dom"



function DashboardLayout(){


return(

<div className="
flex
min-h-screen
bg-[#F6F2EB]
">


<Sidebar />


<main className="
flex-1
p-8
overflow-x-hidden
">


<Outlet />


</main>


</div>

)

}


export default DashboardLayout