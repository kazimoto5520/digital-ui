import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {sideMenu} from "../lib/sidemenu";
import {FaCircleArrowLeft} from "react-icons/fa6";

const Navbar = () => {
    const [sidebarOpen, setSidebarOpen] = useState<boolean>(true);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    useEffect(() => {
        const storedSidebarState = localStorage.getItem('sidebarOpen');
        if (storedSidebarState) {
            setSidebarOpen(JSON.parse(storedSidebarState));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('sidebarOpen', JSON.stringify(sidebarOpen));
    }, [sidebarOpen]);

    return (
        <div
            className={`relative bg-gray-800 h-full w-64 flex flex-col justify-between items-center p-4 ${sidebarOpen ? 'w-64' : 'w-16'}`}>
            <button
                onClick={toggleSidebar}
                className={`absolute -right-2 top-6 bg-white text-gray-800 border rounded-full border-gray-50 hover:text-blue-400 hover:bg-white duration-300 ${sidebarOpen ? '' : 'rotate-180'}`}>
                <FaCircleArrowLeft size={24}/>
            </button>
            <div className="flex items-center space-x-2 text-white">
                <div className="w-12 h-12">
                    <img src="/logo.jpg" alt="logo" className="w-full h-full object-cover rounded-full"/>
                </div>
                {sidebarOpen && (
                    <h1 className="font-bold text-lg">Digital <span className="text-blue-300">UI</span></h1>)}
            </div>
            <div className="mt-4 p-4">
                <ul className="space-y-2">
                    {sideMenu.map(item => (
                        <li key={item.id}>
                            <Link to={item.link}
                                  className="flex items-center text-white space-x-2 hover:text-gray-300 p-3">
                                <span className="text-white">
                                    {item.icon}
                                </span>

                                {sidebarOpen && (<span>{item.name}</span>)}
                            </Link>


                        </li>
                    ))}
                </ul>
            </div>

            <div className="mt-auto text-white p-3">
                <div className="flex items-center space-x-2 text-white">
                    <div className="w-12 h-12">
                        <img src="/avatar.png" alt="logo" className="w-full h-full object-cover rounded-full"/>
                    </div>
                    {sidebarOpen && (
                        <div className="flex flex-col">
                            <h1 className="">Mesha Dani</h1>
                            <p className="text-sm text-gray-300">Vendor</p>
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
};

export default Navbar;