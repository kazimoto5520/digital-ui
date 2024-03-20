import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface RegisterData {
    fullName: string;
    email: string;
    password: string;
    region: string;
    district: string;
    role: string;
}

const Register = () => {
    const [data, setData] = useState<RegisterData>({
        fullName: '',
        email: '',
        password: '',
        region: '',
        district: '',
        role: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Call your register function here with the data state
        console.log(data);
    };

    return (
        <div className="flex items-center justify-center h-screen background-login">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-[600px]">
                <h1 className="text-3xl font-bold mb-4">Register</h1>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            value={data.fullName}
                            onChange={handleChange}
                            className="mt-1 p-2 border rounded-md w-full"
                            placeholder="Enter your full name"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={data.email}
                            onChange={handleChange}
                            className="mt-1 p-2 border rounded-md w-full"
                            placeholder="Enter your email"
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={data.password}
                            onChange={handleChange}
                            className="mt-1 p-2 border rounded-md w-full"
                            placeholder="Enter your password"
                        />
                    </div>

                    <div>
                        <label htmlFor="region" className="block text-sm font-medium text-gray-700">
                            Region
                        </label>
                        <input
                            type="text"
                            id="region"
                            name="region"
                            value={data.region}
                            onChange={handleChange}
                            className="mt-1 p-2 border rounded-md w-full"
                            placeholder="Enter your region"
                        />
                    </div>

                    <div>
                        <label htmlFor="district" className="block text-sm font-medium text-gray-700">
                            District
                        </label>
                        <input
                            type="text"
                            id="district"
                            name="district"
                            value={data.district}
                            onChange={handleChange}
                            className="mt-1 p-2 border rounded-md w-full"
                            placeholder="Enter your district"
                        />
                    </div>

                    <div>
                        <label htmlFor="role" className="block text-sm font-medium text-gray-700">
                            Role
                        </label>
                        <input
                            type="text"
                            id="role"
                            name="role"
                            value={data.role}
                            onChange={handleChange}
                            className="mt-1 p-2 border rounded-md w-full"
                            placeholder="Enter your role"
                        />
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
                        >
                            Register
                        </button>
                    </div>
                </form>

                <div className="mt-4 text-sm text-gray-600">
                    Already have an account?{' '}
                    <Link to="/login" className="text-blue-500 hover:underline">
                        Login
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Register;
