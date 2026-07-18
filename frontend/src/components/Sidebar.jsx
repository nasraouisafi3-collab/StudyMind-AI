import {NavLink} from "react-router-dom";

import {
LayoutDashboard,
MessageSquare,
Upload,
Library,
Brain,
Layers,
TrendingUp,
User,
Settings
} from "lucide-react";


const menu=[

{
name:"Dashboard",
path:"/dashboard",
icon:LayoutDashboard
},

{
name:"AI Tutor",
path:"/chat",
icon:MessageSquare
},

{
name:"Upload",
path:"/upload",
icon:Upload
},

{
name:"Library",
path:"/library",
icon:Library
},

{
name:"Quiz",
path:"/quiz",
icon:Brain
},

{
name:"Flashcards",
path:"/flashcards",
icon:Layers
},

{
name:"Progress",
path:"/progress",
icon:TrendingUp
},

{
name:"Profile",
path:"/profile",
icon:User
},

{
name:"Settings",
path:"/settings",
icon:Settings
}

];



export default function Sidebar(){


return(

<aside className="sidebar">


<div className="brand">

<div className="brand-icon">
🧠
</div>


<div>

<h2>
StudyMind
</h2>

<span>
AI Learning
</span>

</div>


</div>



<nav>


{
menu.map(item=>{


const Icon=item.icon;


return(

<NavLink

key={item.name}

to={item.path}

className={({isActive})=>
isActive?
"nav-item active":
"nav-item"
}


>


<Icon size={21}/>


<span>
{item.name}
</span>


</NavLink>


)

})

}


</nav>



<div className="sidebar-bottom">

<div>
🚀
</div>

<p>
Keep learning,
<br/>
Safi!
</p>


</div>


</aside>


)


}