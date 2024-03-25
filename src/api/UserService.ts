import axios from "axios";

const API_URL:String = "http://localhost:8080";

export async function login(data:any){
    return axios.post(API_URL + "/pesalock/v1/auth/login", data);
}