import { motion } from "framer-motion"
import TunisianPattern from "./TunisianPattern"


function SmartTools(){


const tools=[

{
icon:"📄",
title:"Smart Summaries",
text:"Transform long courses into clear and simple notes.",
example:"Cours Réseaux → Résumé intelligent"
},


{
icon:"📝",
title:"AI Quizzes",
text:"Practice with personalized questions before exams.",
example:"Prepare smarter for your tests"
},


{
icon:"🗂",
title:"Flashcards",
text:"Remember important concepts faster.",
example:"Learn → Review → Remember"
},


{
icon:"💬",
title:"Ask your documents",
text:"Chat with your courses and understand anything.",
example:"Fassrli hedha b Tounsi 🇹🇳"
}

]



return(


<section className="
relative
overflow-hidden
min-h-screen
bg-[#FCFAF7]
px-6
py-32
">


<TunisianPattern position="top-right"/>



<div className="
absolute
bottom-20
left-20
w-72
h-72
bg-orange-300
rounded-full
blur-3xl
opacity-20
"/>




<div className="
max-w-6xl
mx-auto
">



<div className="
text-center
mb-20
">


<h2 className="
text-5xl
font-semibold
tracking-tight
">

Everything you need
<br/>
to learn smarter.

</h2>



<p className="
mt-5
text-xl
text-gray-500
">

One AI.
Every subject.
Every student.

</p>


</div>





<div className="
grid
md:grid-cols-2
gap-8
">


{

tools.map((tool,index)=>(


<motion.div


key={index}


initial={{
opacity:0,
y:40
}}


whileInView={{
opacity:1,
y:0
}}


transition={{
delay:index*0.15
}}


viewport={{
once:true
}}



className="
bg-white
rounded-[32px]
p-8
shadow-xl
border
border-gray-100
hover:scale-[1.02]
transition
"



>



<div className="
text-5xl
mb-6
">

{tool.icon}

</div>



<h3 className="
text-2xl
font-semibold
">

{tool.title}

</h3>




<p className="
mt-3
text-gray-500
text-lg
">

{tool.text}

</p>




<div className="
mt-6
bg-[#FCFAF7]
rounded-2xl
p-4
text-orange-600
font-medium
">

✦ {tool.example}

</div>




</motion.div>


))


}


</div>



</div>



</section>


)


}


export default SmartTools