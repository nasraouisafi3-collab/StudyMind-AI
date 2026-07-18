import { motion } from "framer-motion"


function CourseDetails(){


const lessons=[

"Introduction to the subject",

"Basic concepts",

"Advanced topics",

"Practice exercises"

]


return(

<div className="
min-h-screen
bg-[#F6F2EB]
p-8
">


<h1 className="
text-4xl
font-bold
text-[#1E293B]
">

📖 Computer Networks

</h1>


<p className="
mt-2
text-gray-500
">

Learn networking fundamentals step by step.

</p>




<motion.div

initial={{
opacity:0,
y:30
}}

animate={{
opacity:1,
y:0
}}

className="
mt-10
bg-white
rounded-3xl
shadow-xl
p-8
max-w-3xl
"

>


<h2 className="
text-2xl
font-bold
">

Lessons

</h2>



<div className="
mt-6
space-y-4
">


{

lessons.map((lesson,index)=>(


<div

key={index}

className="
flex
justify-between
items-center
bg-gray-50
p-5
rounded-xl
"

>

<span>

📘 {index+1}. {lesson}

</span>


<button className="
bg-[#D97732]
text-white
px-5
py-2
rounded-xl
">

Start

</button>


</div>


))

}


</div>



</motion.div>


</div>

)

}


export default CourseDetails