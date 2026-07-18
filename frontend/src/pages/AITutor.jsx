import { motion } from "framer-motion"


function AITutor(){

return(

<div className="min-h-screen bg-[#F6F2EB] p-8">


<h1 className="
text-4xl
font-bold
text-[#1E293B]
">
🤖 AI Tutor
</h1>


<p className="mt-2 text-gray-500">
Your personal AI learning assistant.
</p>



<motion.div

initial={{opacity:0,y:30}}
animate={{opacity:1,y:0}}

className="
mt-10
max-w-5xl
bg-white
rounded-3xl
shadow-xl
p-8
"

>


<div className="
h-[450px]
bg-gray-50
rounded-2xl
border
p-6
">


<div className="
bg-white
rounded-xl
shadow-sm
p-5
max-w-lg
">

👋 Hello!

<br/>

I am StudyMind AI Tutor.

<br/>

Ask me anything about your courses.

</div>


</div>



<div className="
flex
gap-3
mt-5
">


<input

placeholder="Ask your question..."

className="
flex-1
h-14
rounded-xl
border
px-5
"

/>


<button

className="
bg-[#D97732]
text-white
px-8
rounded-xl
font-semibold
"

>

Send

</button>


</div>


</motion.div>


</div>

)

}


export default AITutor