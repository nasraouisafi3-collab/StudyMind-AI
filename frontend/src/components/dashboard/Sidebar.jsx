import { NavLink } from "react-router-dom"



function Sidebar(){


const links=[


{
name:"Dashboard",
icon:"🏠",
path:"/dashboard"
},


{
name:"Courses",
icon:"📚",
path:"/courses"
},


{
name:"AI Tutor",
icon:"🤖",
path:"/ai-tutor"
},


{
name:"Quiz",
icon:"📝",
path:"/quiz"
},


{
name:"Flashcards",
icon:"🧠",
path:"/flashcards"
},


{
name:"Progress",
icon:"📈",
path:"/progress"
},


{
name:"Profile",
icon:"👤",
path:"/profile"
},


{
name:"Settings",
icon:"⚙️",
path:"/settings"
}


]



return(


<div

className="
w-72
min-h-screen
bg-white
shadow-xl
p-6
"

>


<h1

className="
text-2xl
font-bold
text-[#D97732]
mb-10
"

>

✦ StudyMind AI

</h1>



<div className="
space-y-3
">


{

links.map((link)=>(


<NavLink

key={link.path}

to={link.path}

className={({isActive}) =>

`

flex
items-center
gap-4
p-4
rounded-xl
transition-all
duration-300

${

isActive

?

"bg-orange-100 text-orange-700 font-semibold scale-105"

:

"hover:bg-orange-50 text-gray-700"

}

`

}


>


<span className="
text-xl
">

{link.icon}

</span>



<span>

{link.name}

</span>



</NavLink>


))


}


</div>


</div>


)

}


export default Sidebar