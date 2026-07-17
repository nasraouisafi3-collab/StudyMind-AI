import Sidebar from "../components/dashboard/Sidebar"
import StatsCard from "../components/dashboard/StatsCard"
import UploadCard from "../components/dashboard/UploadCard"
import AITutorChat from "../components/dashboard/AITutorChat"


function Dashboard(){

return(

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
p-10
"
>


<h1
className="
text-5xl
font-semibold
text-[#1E293B]
"
>

Welcome back 👋

</h1>



<p
className="
mt-3
text-gray-500
text-xl
"
>

Ready to learn something new?

</p>





<div
className="
grid
md:grid-cols-3
gap-6
mt-10
"
>


<StatsCard
icon="📚"
title="Courses"
value="0"
/>


<StatsCard
icon="📝"
title="Quizzes"
value="0"
/>


<StatsCard
icon="🔥"
title="Study streak"
value="0"
/>


</div>





<UploadCard />



<AITutorChat />



</main>


</div>

)

}


export default Dashboard