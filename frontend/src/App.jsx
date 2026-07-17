import { Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Dashboard from "./pages/Dashboard"
import Login from "./pages/Login"
import Register from "./pages/Register"
import ForgotPassword from "./pages/ForgotPassword"



function App(){

return (

<Routes>

<Route
path="/"
element={<Home />}
/>


<Route
path="/login"
element={<Login />}
/>


<Route
path="/register"
element={<Register />}
/>


<Route
path="/forgot-password"
element={<ForgotPassword />}
/>


<Route
path="/dashboard"
element={<Dashboard />}
/>


</Routes>

)

}


export default App