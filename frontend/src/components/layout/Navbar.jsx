import Logo from "../Logo"

function Navbar(){

return(

<nav
className="
fixed
top-0
left-0
w-full
z-50
px-8
py-6
flex
justify-between
items-center
backdrop-blur-xl
bg-[#F6F2EB]/70
border-b
border-orange-200/40
"
>


{/* Brand */}

<div
className="
flex
items-center
gap-3
text-2xl
font-semibold
text-[#1E293B]
"
>

<div
className="
text-[#D97732]
text-3xl
"
>
✦
</div>


<span>
StudyMind AI
</span>


</div>





{/* Links */}

<div
className="
hidden
md:flex
gap-10
text-gray-700
font-medium
"
>

<a>
Features
</a>


<a>
How it works
</a>


<a>
Tounsi AI 🇹🇳
</a>


</div>





{/* Button */}

<button
className="
px-6
py-3
rounded-full
bg-[#D97732]
text-white
font-medium
shadow-lg
shadow-orange-900/20
hover:scale-105
transition
"
>

Start Learning

</button>



</nav>

)

}


export default Navbar