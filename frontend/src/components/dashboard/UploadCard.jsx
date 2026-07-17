import { motion } from "framer-motion"
import { useState } from "react"


function UploadCard(){

const [uploading,setUploading] = useState(false)


function handleUpload(){

setUploading(true)

}


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
p-10
border
border-orange-100
shadow-sm
"

>


{
!uploading ?

<>

<div className="
text-5xl
mb-5
">
📄
</div>


<h2 className="
text-3xl
font-semibold
text-[#1E293B]
">
Upload your course
</h2>


<p className="
mt-3
text-gray-500
text-lg
">
Transform your PDF into summaries,
quizzes and flashcards.
</p>



<button

onClick={handleUpload}

className="
mt-8
px-8
py-4
rounded-full
bg-[#C96A2E]
text-white
font-medium
hover:scale-105
transition
"

>

Upload PDF

</button>

</>


:


<div>

<h2 className="
text-2xl
font-semibold
text-[#1E293B]
">
AI is working...
</h2>


<div className="
mt-6
space-y-4
">


{
[
"📄 Reading document",
"🧠 Creating summary",
"📝 Generating quiz",
"🗂 Preparing flashcards"
]
.map((item,index)=>(

<motion.div

initial={{
opacity:0,
x:-20
}}

animate={{
opacity:1,
x:0
}}

transition={{
delay:index*.4
}}

key={index}

className="
bg-orange-50
rounded-2xl
p-4
text-[#1E293B]
"

>

{item} ✓

</motion.div>


))

}


</div>


</div>


}


</motion.div>

)

}


export default UploadCard