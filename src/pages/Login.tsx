import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {login} from "../api/UserService";

interface Data {
    username: string,
    password: string
}

const Login = () => {

    const [data, setData] = useState<Data>({
        username: '',
        password: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };


   /* const handleSubmit = async (e:any) => {
        e.preventDefault();
        await login(data);
    }*/

    const handleSubmit =  async (e:any)=> {
        e.preventDefault();
        const response = await login(data);
        console.log(response);
    }

    return (
        <div className="flex items-center justify-center h-screen background-login">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-[600px]">
                <h1 className="text-3xl font-bold mb-4">Login</h1>

                <form className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Username</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={data.username}
                            onChange={handleChange}
                            className="mt-1 p-2 border rounded-md w-full"
                            placeholder="Enter your username"
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
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
                        <button
                            onClick={handleSubmit}
                            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
                        >
                            Login
                        </button>
                    </div>
                </form>

                <div className="mt-4 text-sm text-gray-600">
                    Don't have an account? <Link to="/register" className="text-blue-500 hover:underline">Register</Link>
                </div>
            </div>
        </div>
    );
};

export default Login;