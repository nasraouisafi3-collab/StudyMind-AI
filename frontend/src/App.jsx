import {Routes, Route, Navigate} from "react-router-dom";

import Layout from "./components/Layout";

import Dashboard from "./pages/Dashboard";
import Chat from "./pages/Chat";
import Upload from "./pages/Upload";
import Library from "./pages/Library";
import Quiz from "./pages/Quiz";
import Flashcards from "./pages/Flashcards";
import Progress from "./pages/Progress";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Document from "./pages/Document";


function App(){

return (

<Layout>

<Routes>

<Route 
path="/" 
element={<Navigate to="/dashboard"/>}
/>


<Route path="/dashboard" element={<Dashboard/>}/>

<Route path="/chat" element={<Chat/>}/>

<Route path="/upload" element={<Upload/>}/>

<Route path="/library" element={<Library/>}/>

<Route path="/quiz" element={<Quiz/>}/>

<Route path="/flashcards" element={<Flashcards/>}/>

<Route path="/progress" element={<Progress/>}/>

<Route path="/profile" element={<Profile/>}/>

<Route path="/settings" element={<Settings/>}/>

<Route 
path="/document/:id" 
element={<Document/>}
/>


</Routes>

</Layout>

)

}


export default App;