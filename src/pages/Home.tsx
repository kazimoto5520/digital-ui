import React from 'react';
import Header from "../components/Header";
import {campaignPro} from "../lib/campaign.pro";
import {Link} from "react-router-dom";

const Home = () => {
    const ads = [
        {
            name: "Kalax Billboard",
            price: "TZS 12M",
            status: "Available",
            location: "Dar es Salaam",
        },

        {
            name: "A1 Billboard",
            price: "TZS 9M",
            status: "Available",
            location: "Makumbusho",
        },

        {
            name: "Kalax Billboard",
            price: "TZS 6M",
            status: "Available",
            location: "Bagamoyo",
        },

        {
            name: "Billboard EF",
            price: "TZS 12M",
            status: "Available",
            location: "Dar es Salaam",
        },
        {
            name: "K3 Billboard",
            price: "TZS 18M",
            status: "Available",
            location: "Tanga",
        },
        {
            name: "Billboard",
            price: "TZS 22M",
            status: "Unavailable",
            location: "Kigoma",
        },
    ];

    return (
        <div className="flex flex-col">
            <Header title={"Dashboard"}/>

            {/* PRO CAMPAIGN CARDS  */}
            <div className="flex flex-col p-4">
                <h1 className="font-semibold text-lg mb-4">Pro Campaigns</h1>

                <div className="grid grid-cols-5 gap-4">
                    {campaignPro.map(item => (
                        <div key={item.id} className="bg-blue-100 p-2 rounded-md shadow-sm">
                            <div className="flex flex-col justify-between">
                                <div className="flex space-x-2 p-2 mb-4 items-center text-gray-800">
                                    {item.icon}
                                    <h1 className="font-semibold">{item.name}</h1>
                                </div>

                                <div className="flex flex-col p-2">
                                    <h1 className="text-lg">{item.value}</h1>
                                    <p className="text-sm text-gray-500">Campaigns</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/*    RECENT PAYMENTS TABLE   */}

            <div className="flex flex-col p-4">
                <div className="flex justify-between items-center">
                    <h1 className="font-semibold text-lg mb-4">Recent Payments</h1>
                    <Link
                        to="#"
                        className="font-medium mr-4 text-blue-600 dark:text-blue-500 hover:underline"
                    >
                        Show All
                    </Link>
                </div>


                <div className="relative overflow-x-auto shadow-md sm:rounded-lg mx-3">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead
                            className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Ads name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Price
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Status
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Location
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        {ads.map(((ad, index) => {
                            return (
                                <tr key={index}
                                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <th
                                        scope="row"
                                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                    >
                                        {ad.name}
                                    </th>
                                    <td className="px-6 py-4">{ad.price}</td>
                                    <td className="px-6 py-4">{ad.status}</td>
                                    <td className="px-6 py-4">{ad.location}</td>
                                </tr>
                            );
                        }))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Home;