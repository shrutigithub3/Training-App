import axios from 'axios';
import { getuser } from './service';

export const axiosPrivate=axios.create({
    baseURL:`http://localhost:3002/newusers`
});
axiosPrivate.interceptors.request.use(
    config =>{
        const data = getuser('user_authority')
        const Token = data.token;

        if(Token){
            config.headers['Authorization']=`Bearer${Token}`;
        }
        console.log(config);
        return config;
    },
    error=>{
        Promise.reject(error)
    }
)