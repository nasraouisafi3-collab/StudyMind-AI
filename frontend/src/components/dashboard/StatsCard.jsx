function StatsCard({icon,title,value}){


return(

<div
className="
bg-white/80
backdrop-blur-xl
rounded-3xl
p-6
shadow-sm
border
border-orange-100
"
>

<div className="
text-3xl
mb-3
">
{icon}
</div>


<p className="
text-gray-500
">
{title}
</p>


<h3 className="
text-3xl
font-semibold
text-[#1E293B]
mt-2
">
{value}
</h3>


</div>

)

}


export default StatsCard