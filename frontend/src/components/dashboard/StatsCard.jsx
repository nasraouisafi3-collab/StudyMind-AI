import { Link } from "react-router-dom"


function Sidebar(){

return (

<div

className="
w-64
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



<nav

className="
space-y-4
"

>


<Link
to="/dashboard"
className="
block
p-3
rounded-xl
hover:bg-orange-50
"
>

🏠 Home

</Link>



<Link
to="/dashboard"
className="
block
p-3
rounded-xl
hover:bg-orange-50
"
>

📚 Courses

</Link>



<Link
to="/dashboard"
className="
block
p-3
rounded-xl
hover:bg-orange-50
"
>

🤖 AI Tutor

</Link>



<Link
to="/dashboard"
className="
block
p-3
rounded-xl
hover:bg-orange-50
"
>

📝 Quiz

</Link>



<Link
to="/dashboard"
className="
block
p-3
rounded-xl
hover:bg-orange-50
"
>

⚙ Settings

</Link>



</nav>


</div>

)

}


export default Sidebar