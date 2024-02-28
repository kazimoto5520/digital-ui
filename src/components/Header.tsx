import React from 'react';

interface HeaderTitle  {
    title: string
}

const Header:React.FC<HeaderTitle> = ({title}) => {
    return (
        <div className="flex justify-between items-center p-4">
            <div className="flex space-x-4 items-center">
                <h1 className="text-bg-800 text-xl font-bold">{title}</h1>
                <div>
                    <input
                        type="text"
                        name="search"
                        placeholder="Search..."
                        className="text-gray-700 border border-gray-600 px-3 py-1 rounded-md"
                    />
                </div>
            </div>

            <div>
                <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">Logout</button>
            </div>
        </div>

    );
};

export default Header;