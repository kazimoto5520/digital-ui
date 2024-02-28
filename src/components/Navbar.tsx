import React from 'react';
import {Link} from "react-router-dom";
import {sideMenu} from "../lib/sidemenu";

const Navbar = () => {
    return (
        <div className="bg-gray-800 h-full w-64 flex flex-col justify-between items-center p-4">
            <div className="flex items-center space-x-2 text-white">
                <div className="w-12 h-12">
                    <img src="/logo.jpg" alt="logo" className="w-full h-full object-cover rounded-full"/>
                </div>
                <h1 className="font-bold text-lg">Digital <span className="text-blue-300">UI</span></h1>
            </div>
            <div className="mt-4 p-4">
                <ul className="space-y-2">
                    {sideMenu.map(item => (
                        <li key={item.id}>
                            <span className="flex items-center">
                                <span className="text-white">
                                    {item.icon}
                                </span>
                                <Link to={item.link} className="text-white hover:text-gray-300 block p-3">
                                {item.name}
                            </Link>
                            </span>

                        </li>
                    ))}
                </ul>
            </div>

            <div className="mt-auto text-white p-3">
                <div className="flex items-center space-x-2 text-white">
                    <div className="w-12 h-12">
                        <img src="/avatar.png" alt="logo" className="w-full h-full object-cover rounded-full"/>
                    </div>
                    <div className="flex flex-col">
                        <h1 className="">Mesha Dani</h1>
                        <p className="text-sm text-gray-300">Vendor</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Navbar;