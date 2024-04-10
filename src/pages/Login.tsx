import React, {useContext, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {login} from "../api/UserService";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import {LoginContext, LoginProvider} from "../lib/LoginContext";

interface Data {
    username: string,
    password: string
}

const Login = () => {

    const navigate = useNavigate();

    const [data, setData] = useState<Data>({
        username: '',
        password: ''
    })

    const {user,setUser} = useContext(LoginContext);

    const [message, setMessage] = useState<any>("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit =  async (e:any)=> {
        e.preventDefault();
        try {
            const response = await login(data);
            console.log(response);

            if (response.status === 200){
                setMessage(toast.success(response.data?.message, {
                    position: "top-right"
                }));


                setTimeout(() => {
                    navigate('/otp', {
                        state: setUser(response?.data?.data)
                    } );
                }, 2000);
            }
        }catch (e:any) {
            setMessage(toast.error(e?.response?.data?.message, {
                position: "top-right"
            }));
            console.error("error: ", e.response.data);
        }

    }

    return (
        <div className="flex items-center justify-center h-screen background-login">
            <ToastContainer />
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