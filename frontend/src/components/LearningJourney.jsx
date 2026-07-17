import { motion } from "framer-motion"


function LearningJourney(){

const steps = [

{
number:"01",
icon:"📚",
title:"Upload your courses",
text:"Add your PDFs, lessons and study materials."
},

{
number:"02",
icon:"✦",
title:"Understand with AI",
text:"StudyMind explains difficult lessons in a simple way."
},

{
number:"03",
icon:"📝",
title:"Practice smarter",
text:"Create quizzes and flashcards to prepare for exams."
},

{
number:"04",
icon:"🎓",
title:"Master your subjects",
text:"Build confidence and improve your results."
}

]


return(

<section
className="
relative
min-h-screen
py-32
px-6
overflow-hidden
bg-[#F6F2EB]
"
>


{/* Tunisian atmosphere */}

<div
className="
absolute
top-20
left-[-150px]
w-[350px]
h-[350px]
rounded-full
bg-[#3F8FA8]/10
blur-[120px]
"
/>


<div
className="
absolute
bottom-20
right-[-150px]
w-[350px]
h-[350px]
rounded-full
bg-[#788B3D]/20
blur-[120px]
"
/>





<div
className="
max-w-6xl
mx-auto
"
>



<motion.div

initial={{
opacity:0,
y:40
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true
}}

transition={{
duration:.8
}}

className="
text-center
"
>


<div
className="
text-5xl
text-[#D97732]
"
>
✦
</div>



<h2
className="
mt-6
text-5xl
md:text-6xl
font-semibold
text-[#1E293B]
leading-tight
"
>

Your learning
<br/>

journey starts here.

</h2>



<p
className="
mt-6
text-xl
text-gray-600
"
>

From your first question
to complete understanding.

</p>



</motion.div>







{/* Journey */}

<div
className="
relative
mt-20
"
>


{/* center line */}

<div
className="
hidden
md:block
absolute
left-1/2
top-0
bottom-0
w-[3px]
bg-[#D97732]/30
"
/>




<div
className="
space-y-12
"
>


{steps.map((step,index)=>(


<motion.div

key={step.number}

initial={{
opacity:0,
x:index%2===0?-60:60
}}

whileInView={{
opacity:1,
x:0
}}

viewport={{
once:true
}}

transition={{
duration:.8
}}

className={`
md:w-1/2
relative

${
index%2===0
?
"md:pr-12"
:
"md:ml-auto md:pl-12"
}

`}

>


<div
className="
bg-white/80
backdrop-blur-xl
rounded-[32px]
p-8
border
border-orange-100
shadow-xl
hover:scale-[1.03]
transition
"
>



<div
className="
flex
items-center
gap-4
"
>


<div
className="
text-4xl
"
>
{step.icon}
</div>


<div>

<p
className="
text-[#D97732]
font-semibold
"
>
{step.number}
</p>


<h3
className="
text-2xl
font-semibold
text-[#1E293B]
"
>
{step.title}
</h3>


</div>


</div>




<p
className="
mt-5
text-gray-600
text-lg
"
>
{step.text}
</p>




</div>



</motion.div>


))}


</div>



</div>




</div>


</section>


)

}


export default LearningJourney