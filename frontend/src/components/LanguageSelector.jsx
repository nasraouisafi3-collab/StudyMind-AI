import { useState } from "react"
import { useLanguage } from "../context/LanguageContext"


function LanguageSelector(){

const { setLanguage } = useLanguage()

const [open,setOpen] = useState(false)


return (

<div className="relative">


<button

onClick={() => setOpen(!open)}

className="
flex
items-center
gap-2
px-4
py-2
rounded-full
bg-white
shadow
border
border-orange-200
"

>

🌐 Language

</button>



{
open && (

<div

className="
absolute
right-0
mt-2
bg-white
rounded-xl
shadow-xl
p-3
space-y-2
"

>


<button
onClick={()=>setLanguage("en")}
className="block w-full text-left"
>
🇬🇧 English
</button>


<button
onClick={()=>setLanguage("fr")}
className="block w-full text-left"
>
🇫🇷 Français
</button>


<button
onClick={()=>setLanguage("tn")}
className="block w-full text-left"
>
🇹🇳 تونسي
</button>


</div>

)

}


</div>

)

}


export default LanguageSelector