import { FileText, Brain, Layers, MessageSquare } from "lucide-react";


const documents = [

{
id:1,
title:"Networking Fundamentals - Chapter 4",
pages:"32 pages",
status:"AI Ready",
type:"PDF"
},

{
id:2,
title:"OSPF Routing Notes",
pages:"18 pages",
status:"Quiz Generated",
type:"PDF"
},

{
id:3,
title:"Data Structures Trees",
pages:"22 pages",
status:"Flashcards Ready",
type:"PDF"
}

];


export default function Library(){


return (

<div className="library">


<div className="page-title">

<div>

<h1>
My Library 📚
</h1>

<p>
All your AI-processed documents in one place.
</p>

</div>


<button className="primary-btn">
⬆ Upload Document
</button>


</div>



<div className="document-grid">


{
documents.map(doc=>(


<div className="document-card" key={doc.id}>


<div className="file-icon">
PDF
</div>



<h3>
{doc.title}
</h3>


<p>
{doc.pages}
</p>


<span className="status">
{doc.status}
</span>




<div className="document-actions">


<a href="/document/1" className="document-link">
<FileText size={17}/>
Summary
</a>


<button>
<Brain size={17}/>
Quiz
</button>


<button>
<Layers size={17}/>
Cards
</button>


<button>
<MessageSquare size={17}/>
Chat
</button>


</div>


</div>


))

}


</div>


</div>

)

}