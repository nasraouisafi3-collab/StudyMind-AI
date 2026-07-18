import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

export default function Layout({children}){

return (

<div className="app">

<Sidebar/>

<div className="main-area">

<Navbar/>

<div className="page-content">
{children}
</div>

</div>

</div>

)

}