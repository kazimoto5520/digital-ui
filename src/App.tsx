import React from 'react';

import './App.css';
import {Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar";
import Analytics from "./pages/Analytics";
import PageNotFound from "./pages/PageNotFound";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Customers from "./pages/Customers";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";


const queryClient = new QueryClient()

function App() {


    return (
        <QueryClientProvider client={queryClient}>
        <div className="flex h-screen overflow-hidden">
            <Navbar/>
            <div className="w-full bg-[#F5F5F5] p-4 overflow-auto">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/analytics" element={<Analytics/>}/>
                    <Route path="/customers" element={<Customers/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="*" element={<PageNotFound/>}/>
                </Routes>
            </div>

        </div>
        </QueryClientProvider>
    );
}

export default App;
