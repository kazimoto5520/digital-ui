import React from 'react';

import './App.css';
import {Route, Routes, useLocation} from "react-router-dom";
import Navbar from "./components/Navbar";
import Analytics from "./pages/Analytics";
import PageNotFound from "./pages/PageNotFound";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {

    // const pathName = useLocation();
    // const login = pathName.pathname === "/login"
    return (
        <div className="flex h-screen overflow-hidden">
            <Navbar/>
            <div className="w-full bg-[#F5F5F5] p-4 overflow-auto">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/analytics" element={<Analytics/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="*" element={<PageNotFound/>}/>
                </Routes>
            </div>

        </div>
    );
}

export default App;
