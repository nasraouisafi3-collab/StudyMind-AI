import Sidebar from "@/components/dashboard/Sidebar"
import LanguageSelector from "@/components/LanguageSelector"


function Dashboard(){

return (

<div

className="
flex
min-h-screen
bg-[#F6F2EB]
"

>


<Sidebar />


<main

className="
flex-1
p-8
"

>


<div

className="
flex
justify-between
items-center
mb-10
"

>


<div>

<h1

className="
text-4xl
font-bold
text-[#1E293B]
"

>

Welcome back 👋

</h1>


<p

className="
text-gray-500
mt-2
"

>

Your AI learning assistant is ready.

</p>


</div>



<LanguageSelector />


</div>



<div

className="
grid
md:grid-cols-3
gap-6
"

>


<div
className="
bg-white
rounded-3xl
p-6
shadow
"
>

📚

<h2 className="text-xl font-semibold mt-3">

Upload Courses

</h2>

<p className="text-gray-500 mt-2">

Add your lessons and let AI analyze them.

</p>


</div>



<div
className="
bg-white
rounded-3xl
p-6
shadow
"
>

🤖

<h2 className="text-xl font-semibold mt-3">

AI Tutor

</h2>

<p className="text-gray-500 mt-2">

Chat with your courses.

</p>


</div>




<div
className="
bg-white
rounded-3xl
p-6
shadow
"
>

📝

<h2 className="text-xl font-semibold mt-3">

Smart Tools

</h2>

<p className="text-gray-500 mt-2">

Generate quizzes and flashcards.

</p>


</div>


</div>


</main>


</div>

)

}


export default Dashboard