import axios from "axios";
import { UserModel } from "./model";

const USER_URL = 'http://localhost:8080/api/user/';


class APIService {
    static async getUserList(){
        const promise = axios.get(USER_URL);
        const dataPromise = promise.then((response)=>response.data).catch((error)=>{
            console.log('@ERROR_', error);
        })
        return dataPromise;
    }

    static async postUser(user: UserModel) {
        console.log('@DUKE_', user);
        
        axios.post(USER_URL, user).then((response)=>{
            console.log('@DUKE_postUser', response);
        })
        .catch((error)=>{
            console.log('@ERROR_', error);
        })
    }
}

export default APIService;