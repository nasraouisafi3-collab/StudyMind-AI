import { Layers } from "lucide-react";


export default function Flashcards(){


return (

<div>


<div className="page-title">

<div>

<h1>
AI Flashcards 🗂️
</h1>

<p>
Smart revision using spaced repetition.
</p>

</div>

<button className="primary-btn">
Create Cards
</button>

</div>



<div className="flashcard">


<Layers size={35}/>


<h2>
What is VLAN?
</h2>


<p>
Click to reveal answer
</p>


</div>



<div className="flash-actions">

<button className="dont-know">

<span>✕</span>
Don't know

</button>


<button className="know-btn">

<span>✓</span>
I know

</button>

</div>



</div>

)

}