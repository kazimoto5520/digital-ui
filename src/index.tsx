import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Analytics from "./pages/Analytics";
import Navbar from "./components/Navbar";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    // <React.StrictMode>
    //   <App />
    // </React.StrictMode>
    <BrowserRouter>
        <div className="flex h-screen overflow-hidden">
            <Navbar/>
            <div className="w-full bg-[#F5F5F5] p-4 overflow-auto">
                <Routes>
                    <Route path="/" element={<App/>}/>
                    <Route path="/analytics" element={<Analytics/>}/>
                </Routes>
            </div>

        </div>
    </BrowserRouter>
);
