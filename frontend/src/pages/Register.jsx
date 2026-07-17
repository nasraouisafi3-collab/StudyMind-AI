import { motion } from "framer-motion"
import { Link } from "react-router-dom"

import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

import LanguageSelector from "@/components/LanguageSelector"



function Register(){


return (

<div

className="
min-h-screen
flex
items-center
justify-center
bg-[#F6F2EB]
px-6
relative
"

>


<div

className="
absolute
top-6
right-6
"

>

<LanguageSelector />

</div>



<motion.div

initial={{
opacity:0,
y:40
}}

animate={{
opacity:1,
y:0
}}

transition={{
duration:0.6
}}

className="
w-full
max-w-md
"

>


<Card

className="
rounded-3xl
border-none
shadow-xl
bg-white/80
backdrop-blur-xl
"

>


<CardContent

className="
p-8
"

>


<div

className="
text-center
mb-8
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



<h1

className="
text-3xl
font-bold
text-[#1E293B]
"

>

Create Account

</h1>



<p

className="
text-gray-500
mt-2
"

>

Start your AI learning journey

</p>


</div>



<div

className="
space-y-4
"

>


<Input

placeholder="Full name"

className="
h-12
rounded-xl
"

/>



<Input

placeholder="Email"

type="email"

className="
h-12
rounded-xl
"

/>



<Input

placeholder="Password"

type="password"

className="
h-12
rounded-xl
"

/>



<Input

placeholder="Confirm password"

type="password"

className="
h-12
rounded-xl
"

/>



<Button

className="
w-full
h-12
rounded-xl
bg-[#D97732]
hover:bg-[#C25F1E]
text-white
"

>

Create account

</Button>


</div>




<p

className="
text-center
mt-6
text-sm
text-gray-500
"

>

Already have an account?


<Link

to="/login"

className="
text-[#D97732]
ml-2
font-semibold
cursor-pointer
"

>

Login

</Link>


</p>



</CardContent>


</Card>


</motion.div>


</div>

)


}


export default Register