import { 
User,
BookOpen,
Flame,
Clock,
Target,
Award
} from "lucide-react";


export default function Profile(){

return (

<div className="profile-page">


<div className="profile-header card">


<div className="profile-avatar">
SB
</div>


<div className="profile-info">

<h1>
Safi Ben Salah
</h1>


<p>
Information Technology Student
</p>


<span className="profile-plan">
Free Plan
</span>

</div>


<button className="edit-btn">
Edit Profile
</button>


</div>





<div className="stats-grid">


<div className="stat-card">

<Flame/>

<div>
<h2>
6
</h2>
<p>
Day streak
</p>
</div>

</div>


<div className="stat-card">

<BookOpen/>

<div>
<h2>
18
</h2>
<p>
Documents
</p>
</div>

</div>


<div className="stat-card">

<Clock/>

<div>
<h2>
42h
</h2>
<p>
Study time
</p>
</div>

</div>


<div className="stat-card">

<Award/>

<div>
<h2>
86%
</h2>
<p>
Mastery
</p>
</div>

</div>


</div>







<div className="profile-grid">



<div className="card">

<h2>
Personal Information
</h2>


<div className="info-row">
<User/>
<span>
Full name
</span>
<strong>
Safi Ben Salah
</strong>
</div>


<div className="info-row">
<span>
Email
</span>

<strong>
safi@email.com
</strong>

</div>



<div className="info-row">
<span>
Level
</span>

<strong>
Intermediate
</strong>

</div>


</div>






<div className="card">

<h2>
Learning Focus 🎯
</h2>


<div className="tags">

<span>
Networking
</span>

<span>
Cybersecurity
</span>

<span>
Programming
</span>


</div>


<p className="profile-text">

AI uses these topics to personalize your learning experience.

</p>


</div>




</div>





<div className="card achievements">


<h2>
Achievements 🏆
</h2>


<div className="badges">


<div>
🔥
<br/>
7 Day Streak
</div>


<div>
📚
<br/>
Knowledge Builder
</div>


<div>
🎯
<br/>
Quiz Master
</div>


</div>


</div>




</div>

)

}