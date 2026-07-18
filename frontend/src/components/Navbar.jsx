import { Search, Bell } from "lucide-react";


export default function Navbar(){

return (

<header className="navbar">


<div className="search-box">

<Search size={18}/>

<input 
placeholder="Search documents, courses..."
/>

</div>


<div className="nav-actions">


<button className="ai-button">
✨ AI Tutor
</button>


<Bell size={22}/>


<div className="user-box">

<div className="avatar">
SB
</div>


<div>
<strong>Safi</strong>
<p>IT Student</p>
</div>


</div>


</div>


</header>

)

}