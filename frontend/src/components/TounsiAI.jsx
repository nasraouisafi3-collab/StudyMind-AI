import { motion } from "framer-motion"


function TounsiAI(){

return(

<section
className="
relative
min-h-screen
py-32
px-6
bg-[#F6F2EB]
overflow-hidden
"
>


<div
className="
absolute
top-20
right-[-150px]
w-[350px]
h-[350px]
rounded-full
bg-[#3F8FA8]/20
blur-[120px]
"
/>


<div
className="
absolute
bottom-20
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


{/* TEXT */}

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

AI that speaks
<br/>

your language.

</h2>



<p
className="
mt-6
text-xl
text-gray-600
"
>

StudyMind understands students
from Tunisia and explains difficult
concepts naturally.

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
px-5 py-3
bg-white
rounded-full
shadow
">
🇬🇧 English
</div>


<div className="
px-5 py-3
bg-white
rounded-full
shadow
">
🇫🇷 Français
</div>


<div className="
px-5 py-3
bg-[#788B3D]/20
rounded-full
">
🇹🇳 Tounsi
</div>


</div>


</motion.div>









{/* AI EXAMPLE */}

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

className="
bg-white/80
backdrop-blur-xl
rounded-[35px]
p-8
shadow-2xl
border
border-orange-100
"

>


<h3
className="
text-xl
font-semibold
text-[#1E293B]
"
>
Explain photosynthesis
</h3>



<div
className="
mt-6
bg-orange-50
rounded-2xl
p-5
"
>

<p className="
font-semibold
text-[#D97732]
">
AI Explanation
</p>


<p className="
mt-3
text-gray-700
">
Plants use sunlight, water and carbon dioxide
to create energy.
</p>


</div>






<div
className="
mt-5
bg-[#788B3D]/10
rounded-2xl
p-5
"
>

<p className="
font-semibold
text-[#788B3D]
">
🇹🇳 Tounsi Explanation
</p>


<p
className="
mt-3
text-gray-700
"
>
Ya3ni ennabta testa3mel dhaw echams
bech ta3mel ghitha w tkabbar.
</p>


</div>



</motion.div>



</div>


</section>

)

}


export default TounsiAI