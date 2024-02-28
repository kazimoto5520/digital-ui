import {
    FaBagShopping,
    FaBookOpenReader,
    FaChartLine,
    FaDatabase, FaGear,
    FaHouse,
    FaRegCreditCard,
    FaUserGroup
} from "react-icons/fa6";

export const sideMenu = [
    {
        id: 1,
        name: "Dashboard",
        link: "/",
        icon: <FaHouse/>
    },
    {
        id: 2,
        name: "Analytics",
        link: "/analytics",
        icon: <FaChartLine/>
    },
    {
        id: 3,
        name: "Inventory",
        link: "/inventory",
        icon: <FaDatabase/>
    },
    {
        id: 4,
        name: "Customers",
        link: "/customers",
        icon: <FaUserGroup/>
    },
    {
        id: 5,
        name: "Ads",
        link: "/ads",
        icon: <FaBagShopping/>
    },
    {
        id: 6,
        name: "Campaigns",
        link: "/campaigns",
        icon: <FaBookOpenReader/>
    },
    {
        id: 7,
        name: "Subscription",
        link: "/subscription",
        icon: <FaRegCreditCard/>
    },
    {
        id: 8,
        name: "Settings",
        link: "/settings",
        icon: <FaGear/>
    },
]