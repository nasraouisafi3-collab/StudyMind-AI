import { 
FileText,
Brain,
Layers,
MessageSquare,
Download
} from "lucide-react";


export default function Document(){


return (

<div className="document-page">


<div className="document-header">


<div>


<h1>
Networking Fundamentals - Chapter 4
</h1>


<p>
PDF • 32 pages • AI processed
</p>


</div>


<button className="primary-btn">
<Download size={18}/>
Export Summary
</button>


</div>





<div className="document-tabs">


<button className="active">
<FileText size={18}/>
Summary
</button>


<button>
<Brain size={18}/>
Quiz
</button>


<button>
<Layers size={18}/>
Flashcards
</button>


<button>
<MessageSquare size={18}/>
AI Chat
</button>


</div>






<div className="summary-layout">



<div className="card">


<h2>
AI Summary ✨
</h2>



<h3>
Key concepts
</h3>



<ul>

<li>
VLANs divide a physical network into logical networks.
</li>

<li>
Trunk ports carry multiple VLAN traffic using 802.1Q tags.
</li>

<li>
OSPF uses link-state advertisements to build topology maps.
</li>

<li>
NAT allows private networks to access the internet.
</li>

</ul>




<h3>
Chapter explanation
</h3>


<p>

This chapter explains modern networking concepts including VLAN,
routing protocols, ACL filtering and NAT. The AI extracted the
important ideas to help you revise faster.

</p>


</div>






<div>


<div className="card side-card">


<h3>
AI Tools
</h3>


<button>
📝 Generate Quiz
</button>


<button>
🗂 Create Flashcards
</button>


<button>
💬 Ask AI about this PDF
</button>


</div>




<div className="card side-card">


<h3>
Document Info
</h3>


<p>
Type: PDF
</p>


<p>
Pages: 32
</p>


<p>
Uploaded: Today
</p>


</div>


</div>




</div>


</div>

)

}