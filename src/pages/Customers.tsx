import React from 'react';
import {useQuery} from "@tanstack/react-query";
import {getAllAdmins} from "../api/admin";

const Customers = () => {

    const query = useQuery({
        queryKey: ['posts'],
        queryFn: getAllAdmins
    })

    return (
        <div>
            <h1>Customers</h1>

            <div>
                <ul>
                    {query?.data?.map((post:any, i:number) => (
                        <li key={i}>{post.firstName}</li>)
                    )}
                </ul>
            </div>

        </div>
    );
};

export default Customers;