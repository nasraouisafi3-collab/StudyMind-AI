import {useTheme} from "../context/ThemeContext";


export default function Settings(){


const {darkMode,setDarkMode}=useTheme();



return (

<div className="settings-page">


<h1>Settings</h1>

<p className="settings-subtitle">
Customize your StudyMind-AI experience
</p>



<div className="settings-card">


<h2>Appearance</h2>



<div className="setting-row">


<div>

<h3>Dark Mode</h3>

<p>
Switch between light and dark interface
</p>

</div>



<div

className={`switch ${darkMode ? "on":""}`}

onClick={()=>setDarkMode(!darkMode)}

>

</div>


</div>



</div>





<div className="settings-card">


<h2>Notifications</h2>



<div className="setting-row">


<div>

<h3>Daily Study Reminder</h3>

<p>
Receive reminders to continue learning
</p>

</div>



<div className="switch on">

</div>


</div>



<div className="divider"></div>



<div className="setting-row">


<div>

<h3>Quiz Results</h3>

<p>
Receive AI learning reports
</p>

</div>



<div className="switch on">

</div>


</div>


</div>






<div className="settings-card">


<h2>Language</h2>


<div className="setting-row">


<div>

<h3>Interface Language</h3>

<p>
Choose your preferred language
</p>

</div>



<select>

<option>
English
</option>

<option>
Français
</option>

<option>
العربية
</option>


</select>


</div>


</div>





<div className="settings-card danger">


<h2>
Danger Zone
</h2>


<div className="setting-row">


<div>

<h3>
Delete Account
</h3>


<p>
Remove your StudyMind data permanently
</p>


</div>



<button className="delete-btn">

Delete

</button>


</div>


</div>


</div>

)

}