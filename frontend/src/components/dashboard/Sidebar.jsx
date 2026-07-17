import { motion } from "framer-motion"


function Sidebar(){

const menu = [
"⌂ Dashboard",
"📚 Courses",
"🧠 AI Tutor",
"📝 Quiz",
"🗂 Flashcards",
"⚙ Settings"
]


return(

<motion.aside

initial={{
x:-40,
opacity:0
}}

animate={{
x:0,
opacity:1
}}

className="
w-72
min-h-screen
p-6
bg-white/70
backdrop-blur-xl
border-r
border-orange-100
"

>


<div
className="
text-2xl
font-semibold
text-[#1E293B]
mb-10
"
>

<span className="text-[#C96A2E]">
✦
</span>

 StudyMindAI

</div>



<div className="
space-y-3
">

{
menu.map((item,index)=>(

<motion.div

whileHover={{
x:8
}}

key={index}

className={`
px-5
py-3
rounded-2xl
cursor-pointer
font-medium
transition

${index===0
?
"bg-[#C96A2E] text-white"
:
"text-gray-600 hover:bg-orange-50"
}

`}

>

{item}

</motion.div>

))
}


</div>


</motion.aside>

)

}


export default Sidebar