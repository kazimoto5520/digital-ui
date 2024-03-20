import React from 'react';

import './App.css';
import {Route, Routes, useLocation} from "react-router-dom";
import Navbar from "./components/Navbar";
import Analytics from "./pages/Analytics";
import PageNotFound from "./pages/PageNotFound";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Customers from "./pages/Customers";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import Register from "./pages/Register";


const queryClient = new QueryClient()

function App() {
    const location = useLocation();

    // Check if the current route is /login or /register
    const hideNavbar = location.pathname === '/login' || location.pathname === '/register';

    return (
        <QueryClientProvider client={queryClient}>
        <div className="flex h-screen overflow-hidden">
            {!hideNavbar && <Navbar/>}
            <div className={!hideNavbar ? `w-full bg-[#F5F5F5] p-4 overflow-auto`: 'w-full overflow-auto'}>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/analytics" element={<Analytics/>}/>
                    <Route path="/customers" element={<Customers/>}/>
                    <Route path="/login" element={<Login />}/>
                    <Route path="/register" element={<Register />}/>
                    <Route path="*" element={<PageNotFound/>}/>
                </Routes>
            </div>

        </div>
        </QueryClientProvider>
    );
}

export default App;
