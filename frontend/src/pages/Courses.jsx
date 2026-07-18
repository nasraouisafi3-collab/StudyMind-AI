import { motion } from "framer-motion"



const courses = [

{
title:"Computer Networks",
icon:"🌐",
progress:80,
color:"bg-blue-100"
},

{
title:"Python Programming",
icon:"🐍",
progress:45,
color:"bg-green-100"
},

{
title:"Cyber Security",
icon:"🔐",
progress:30,
color:"bg-purple-100"
},

{
title:"Artificial Intelligence",
icon:"🤖",
progress:60,
color:"bg-orange-100"
}

]



function Courses(){


return (

<div

className="
min-h-screen
bg-[#F6F2EB]
p-8
"

>


<h1

className="
text-4xl
font-bold
text-[#1E293B]
"

>

📚 My Courses

</h1>


<p

className="
text-gray-500
mt-2
mb-8
"

>

Manage your learning materials and progress.

</p>




<input

placeholder="Search courses..."

className="
w-full
max-w-xl
h-12
rounded-xl
px-5
bg-white
shadow-sm
outline-none
mb-10
"

/>




<div

className="
grid
md:grid-cols-2
lg:grid-cols-3
gap-6
"

>


{

courses.map((course,index)=>(


<motion.div

key={index}

initial={{
opacity:0,
y:30
}}

animate={{
opacity:1,
y:0
}}

transition={{
delay:index*0.1
}}

whileHover={{
scale:1.03
}}

className="
bg-white
rounded-3xl
p-6
shadow-lg
"

>


<div

className="
text-5xl
mb-5
"

>

{course.icon}

</div>



<h2

className="
text-xl
font-bold
text-[#1E293B]
"

>

{course.title}

</h2>



<div

className="
mt-5
"

>

<div

className="
flex
justify-between
text-sm
mb-2
"

>

<span>

Progress

</span>


<span>

{course.progress}%

</span>


</div>



<div

className="
h-3
bg-gray-200
rounded-full
overflow-hidden
"

>

<div

className="
h-full
bg-[#D97732]
rounded-full
"

style={{

width:`${course.progress}%`

}}

/>


</div>


</div>



<button

className="
mt-6
w-full
py-3
rounded-xl
bg-[#D97732]
text-white
font-semibold
hover:bg-[#C25F1E]
transition
"

>

Continue Learning

</button>



</motion.div>


))

}


</div>


</div>

)

}


export default Courses