import { motion } from "framer-motion"


function AITutorSection(){

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
top-0
right-[-150px]
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
bottom-0
left-[-150px]
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
grid
md:grid-cols-2
gap-16
items-center
"
>


{/* LEFT */}

<motion.div

initial={{
opacity:0,
x:-40
}}

whileInView={{
opacity:1,
x:0
}}

viewport={{
once:true
}}

transition={{
duration:0.8
}}

>


<div
className="
text-[#D97732]
text-5xl
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

One lesson.
<br/>

Many ways
<br/>

to understand.

</h2>


<p
className="
mt-6
text-xl
text-gray-600
leading-relaxed
"
>

StudyMind AI transforms every course
into explanations that match the way
you learn.

</p>



<div
className="
mt-8
flex
gap-3
flex-wrap
"
>

<div className="
px-5
py-3
rounded-full
bg-white
shadow
">
🇬🇧 English
</div>


<div className="
px-5
py-3
rounded-full
bg-white
shadow
">
🇫🇷 Français
</div>


<div className="
px-5
py-3
rounded-full
bg-[#788B3D]/20
">
🇹🇳 Tounsi
</div>


</div>


</motion.div>








{/* RIGHT PROCESS */}


<motion.div

initial={{
opacity:0,
scale:.9
}}

whileInView={{
opacity:1,
scale:1
}}

viewport={{
once:true
}}

transition={{
duration:0.8
}}

className="
relative
"
>


<div
className="
bg-white/80
backdrop-blur-xl
rounded-[35px]
border
border-orange-100
shadow-2xl
p-8
"
>


<div
className="
text-center
font-semibold
text-xl
text-[#1E293B]
"
>
✦ StudyMind AI Process
</div>





<div
className="
mt-8
space-y-5
"
>


{/* STEP 1 */}

<div
className="
flex
items-center
gap-5
p-5
rounded-2xl
bg-[#F6F2EB]
"
>

<div className="
text-3xl
">
📄
</div>

<div>

<h3 className="font-semibold">
Your Course
</h3>

<p className="text-gray-500 text-sm">
PDFs, notes, lessons
</p>

</div>

</div>




<div
className="
text-center
text-[#D97732]
text-3xl
"
>
↓
</div>





{/* STEP 2 */}

<div
className="
flex
items-center
gap-5
p-5
rounded-2xl
bg-orange-50
"
>

<div className="
text-3xl
">
✦
</div>


<div>

<h3 className="font-semibold">
AI Understanding
</h3>


<p className="text-gray-500 text-sm">
Analyses and explains
</p>


</div>

</div>




<div
className="
text-center
text-[#D97732]
text-3xl
"
>
↓
</div>





{/* STEP 3 */}

<div
className="
grid
grid-cols-2
gap-3
"
>


<div
className="
p-4
rounded-2xl
bg-[#788B3D]/10
text-center
"
>

🧠

<p className="text-sm mt-2">
Simple explanation
</p>

</div>



<div
className="
p-4
rounded-2xl
bg-[#3F8FA8]/10
text-center
"
>

🇹🇳

<p className="text-sm mt-2">
Tounsi mode
</p>

</div>



</div>



</div>



</div>


</motion.div>



</div>


</section>

)

}


export default AITutorSection