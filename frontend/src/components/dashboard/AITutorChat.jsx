import { motion } from "framer-motion"


function AITutorChat(){

return(

<motion.div

initial={{
opacity:0,
y:30
}}

animate={{
opacity:1,
y:0
}}

transition={{
duration:.6
}}

className="
mt-10
bg-white/80
backdrop-blur-xl
rounded-[32px]
p-8
border
border-orange-100
shadow-sm
"

>


<div
className="
flex
items-center
gap-3
mb-8
"
>

<div
className="
text-3xl
"
>
🤖
</div>


<div>

<h2
className="
text-2xl
font-semibold
text-[#1E293B]
"
>
StudyMind Tutor
</h2>


<p
className="
text-gray-500
"
>
Your personal AI teacher
</p>


</div>


</div>





<div
className="
space-y-5
"
>


{/* User */}

<div
className="
flex
justify-end
"
>

<div
className="
bg-[#C96A2E]
text-white
px-5
py-4
rounded-3xl
max-w-md
"
>

Explain DHCP

</div>

</div>





{/* AI */}

<div
className="
flex
justify-start
"
>

<div
className="
bg-orange-50
px-5
py-4
rounded-3xl
max-w-md
text-[#1E293B]
"
>


<p
className="
font-semibold
mb-2
"
>

AI Explanation

</p>


DHCP is a network protocol that automatically gives devices IP addresses.


</div>

</div>






{/* Tounsi */}

<div
className="
flex
justify-start
"
>

<div
className="
bg-[#728340]/10
px-5
py-4
rounded-3xl
max-w-md
"
>


<p
className="
font-semibold
text-[#728340]
"
>

🇹🇳 Tounsi

</p>


Ya3ni DHCP howa elli ya3tik adresse IP automatiquement
ki tetconnecti lel réseau.


</div>


</div>



</div>






<div
className="
mt-8
flex
gap-3
"
>

<input

placeholder="Ask your course anything..."

className="
flex-1
px-5
py-4
rounded-full
border
border-orange-100
outline-none
focus:ring-2
focus:ring-orange-300
"

/>


<button

className="
px-7
rounded-full
bg-[#C96A2E]
text-white
font-medium
"

>

Send

</button>


</div>



</motion.div>


)

}


export default AITutorChat