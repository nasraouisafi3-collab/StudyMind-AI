import { motion } from "framer-motion"



function StatsCard({title,value,icon}){


return(

<motion.div

whileHover={{
scale:1.05,
y:-5
}}

transition={{
duration:.3
}}

className="
bg-white
rounded-[32px]
p-8
shadow-lg
border
border-orange-100
"

>


<div className="
text-5xl
mb-5
">

{icon}

</div>



<h3 className="
text-gray-500
text-lg
">

{title}

</h3>



<h2 className="
text-5xl
font-bold
text-[#1E293B]
mt-3
">

{value}

</h2>



<div className="
mt-5
h-2
bg-gray-100
rounded-full
overflow-hidden
">

<div

className="
h-full
bg-[#D97732]
rounded-full
"

style={{
width:"70%"
}}

/>


</div>



</motion.div>

)

}


export default StatsCard