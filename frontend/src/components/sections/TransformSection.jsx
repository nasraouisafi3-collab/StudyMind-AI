import { motion } from "framer-motion"


function TransformSection(){

return(

<section
className="
min-h-screen
relative
flex
items-center
justify-center
px-6
bg-[#F6F2EB]
overflow-hidden
"
>


<div
className="
max-w-5xl
text-center
"
>


<motion.h2

initial={{
opacity:0,
y:50
}}

whileInView={{
opacity:1,
y:0
}}

transition={{
duration:1
}}

viewport={{
once:true
}}

className="
text-5xl
md:text-7xl
font-semibold
leading-tight
text-[#1E293B]
"

>

Your courses
<br/>

become

<span
className="
text-[#D97732]
"
>
 knowledge.
</span>


</motion.h2>





<motion.p

initial={{
opacity:0
}}

whileInView={{
opacity:1
}}

transition={{
delay:.3,
duration:1
}}

className="
mt-8
text-xl
text-gray-600
"

>

Upload your lessons.
Let StudyMind AI understand,
summarize and explain them.

</motion.p>






<div
className="
mt-20
grid
md:grid-cols-3
gap-8
items-center
"
>



<motion.div

whileHover={{
scale:1.05
}}

className="
rounded-3xl
bg-white/70
backdrop-blur
shadow-xl
p-8
border
border-orange-100
"

>

<div className="
text-4xl
"
>
📄
</div>

<h3
className="
mt-4
font-semibold
text-xl
"
>
Your Courses
</h3>


<p className="
mt-2
text-gray-500
"
>
PDFs, notes, lessons
</p>

</motion.div>





<div
className="
text-4xl
text-[#D97732]
"
>
→
</div>





<motion.div

whileHover={{
scale:1.05
}}

className="
rounded-3xl
bg-[#D97732]
text-white
shadow-xl
p-8
"

>

<div className="
text-4xl
"
>
✦
</div>


<h3
className="
mt-4
font-semibold
text-xl
"
>
StudyMind AI
</h3>


<p
className="
mt-2
text-orange-100
"
>
Turns information into understanding
</p>


</motion.div>



</div>





<div
className="
mt-12
flex
justify-center
gap-4
flex-wrap
"
>


<div className="
px-5
py-3
rounded-full
bg-white
shadow
"
>
🧠 Summary
</div>


<div className="
px-5
py-3
rounded-full
bg-white
shadow
"
>
📝 Quiz
</div>


<div className="
px-5
py-3
rounded-full
bg-white
shadow
"
>
🗂 Flashcards
</div>


<div className="
px-5
py-3
rounded-full
bg-white
shadow
"
>
💬 AI Tutor
</div>


</div>



</div>


</section>

)

}


export default TransformSection