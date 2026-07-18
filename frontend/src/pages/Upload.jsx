import {
UploadCloud,
FileText,
CheckCircle,
Loader
} from "lucide-react";


export default function Upload(){


return (

<div className="upload-page">


<div className="page-title">

<h1>
Upload your documents 📚
</h1>

<p>
Let AI summarize, explain and create quizzes from your files.
</p>

</div>





<div className="upload-box">


<UploadCloud size={55}/>


<h2>
Drag & Drop your file
</h2>


<p>
PDF, DOCX, PPTX up to 50MB
</p>


<button>
Choose File
</button>


</div>





<div className="processing-card">


<h3>
Recent uploads
</h3>




<FileUpload

name="Networking_Fundamentals.pdf"

status="AI Summary ready"

/>



<FileUpload

name="OSPF_Routing.pptx"

status="Processing..."

loading

/>



</div>



</div>


)

}





function FileUpload({name,status,loading}){


return (

<div className="file-item">


<div className="file-icon">

<FileText size={22}/>

</div>



<div className="file-info">

<h4>
{name}
</h4>


<p>
{status}
</p>

</div>



{
loading ?

<Loader className="spin"/>

:

<CheckCircle className="success"/>

}



</div>


)

}