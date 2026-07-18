import {
Send,
Paperclip,
Plus
} from "lucide-react";


export default function Chat(){


return (

<div className="chat-page">


{/* HISTORY SIDEBAR INSIDE CHAT */}


<div className="chat-history">


<button className="new-chat">
<Plus size={18}/>
New Chat
</button>



<h4>
Today
</h4>


<div className="chat-item active">
Explain VLAN trunking
</div>


<div className="chat-item">
OSPF configuration help
</div>



<h4>
Earlier
</h4>


<div className="chat-item">
NAT vs PAT
</div>


<div className="chat-item">
Subnetting practice
</div>


<div className="chat-item">
Python revision
</div>


</div>





{/* CHAT AREA */}


<div className="chat-container">


<div className="chat-header">

<div>

<h2>
AI Tutor 🤖
</h2>

<p>
Your personal learning assistant
</p>

</div>


</div>





<div className="messages">



<div className="message ai">

<div className="message-avatar">
AI
</div>


<div className="bubble">

Hi Safi 👋  
<br/>
I'm your StudyMind AI Tutor.
<br/><br/>

Ask me about your courses, upload notes, or ask me to explain anything.

</div>


</div>






<div className="message user">


<div className="bubble user-bubble">

Explain VLAN trunking simply

</div>


</div>






<div className="message ai">

<div className="message-avatar">
AI
</div>


<div className="bubble">


Sure!

Think of a trunk link as a highway between switches.

It carries traffic from multiple VLANs using **802.1Q tags**.

<br/><br/>

Example:

<pre>

interface GigabitEthernet0/1

switchport mode trunk

switchport trunk allowed vlan 10,20,30

</pre>


</div>


</div>



</div>






{/* INPUT */}


<div className="chat-input">


<button>

<Paperclip size={20}/>

</button>



<input

placeholder="Message your AI tutor..."

/>



<button className="send">

<Send size={20}/>

</button>


</div>



</div>


</div>

)

}