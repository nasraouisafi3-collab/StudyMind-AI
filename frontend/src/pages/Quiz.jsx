import { Brain, CheckCircle } from "lucide-react";


export default function Quiz(){

return (

<div>


<div className="page-title">

<div>

<h1>
AI Quiz Generator 🧠
</h1>

<p>
Test your knowledge from your documents.
</p>

</div>


<button className="primary-btn">
Generate Quiz
</button>

</div>




<div className="quiz-layout">


<div className="card">


<h2>
Networking Fundamentals Quiz
</h2>


<p className="muted">
10 questions • Medium difficulty
</p>



<div className="question">

<h3>
1. What protocol does OSPF use?
</h3>


<div className="option">
A. Distance Vector
</div>


<div className="option selected">
B. Link State
</div>


<div className="option">
C. Static Routing
</div>


<div className="option">
D. NAT
</div>


</div>



<button className="primary-btn">
Next Question →
</button>


</div>




<div className="card">

<h3>
Quiz Progress
</h3>


<div className="progress">

<div></div>

</div>


<p>
Question 1 / 10
</p>



</div>


</div>


</div>

)

}