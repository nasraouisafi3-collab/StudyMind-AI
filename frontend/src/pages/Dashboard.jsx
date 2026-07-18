import { FileText, Brain, Layers, MessageSquare } from "lucide-react";


const stats = [
{
title:"Documents studied",
value:"18",
icon:<FileText/>
},

{
title:"Quizzes completed",
value:"24",
icon:<Brain/>
},

{
title:"Flashcards mastered",
value:"214",
icon:<Layers/>
},

{
title:"Study streak",
value:"6 days",
icon:<MessageSquare/>
}

];


export default function Dashboard(){

return (

<div className="dashboard">


<div className="welcome">

<div>

<h1>
Welcome back, Safi 👋
</h1>

<p>
Your AI tutor is ready. Continue learning where you stopped.
</p>

</div>


<button className="primary-btn">
✨ Ask AI Tutor
</button>


</div>



<div className="stats-grid">


{
stats.map((item)=>(

<div className="stat-card" key={item.title}>


<div className="stat-icon">

{item.icon}

</div>


<div>

<h2>
{item.value}
</h2>

<p>
{item.title}
</p>

</div>


</div>

))
}


</div>




<div className="dashboard-grid">



<div className="card">


<div className="card-header">

<h3>
Recent documents
</h3>


<span>
View all
</span>

</div>



<div className="document">


<div className="pdf">
PDF
</div>


<div>

<strong>
Networking Fundamentals
</strong>

<p>
Summary generated • 32 pages
</p>


</div>


</div>




<div className="document">


<div className="pdf">
PDF
</div>


<div>

<strong>
OSPF Routing Notes
</strong>

<p>
Quiz ready • 18 questions
</p>


</div>


</div>



</div>





<div className="card">


<h3>
AI Quick Actions
</h3>


<button className="action">
📄 Summarize document
</button>


<button className="action">
📝 Generate quiz
</button>


<button className="action">
🗂 Create flashcards
</button>


<button className="action">
💬 Explain a topic
</button>



</div>



</div>




<div className="card recommendation">


<h3>
🤖 AI Recommendation
</h3>


<p>
Your networking knowledge is strong. 
Review VLAN and OSPF flashcards for 10 minutes today to improve mastery.
</p>


</div>


</div>

)

}