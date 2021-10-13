import axios from 'axios';

const url = "https://api.github.com";

export async function getUserRepo(userName,userRepo){
    const res  = await axios.get(`${url}/repos/${userName}/${userRepo}`);
    return res
}



