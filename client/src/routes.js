import React from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import RegisterForm from "./components/RegisterForm"
import Home from "./screens/home"
import Register from "./screens/register"

const Routers = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/register" element={<Register />} />
            </Routes>
        </Router>
    )
}

export default Routers
