import axios from 'axios';

const url = "https://api.github.com";

export async function getUserRepo(userName,userRepo){
    const res  = await axios.get(`${url}/repos/${userName}/${userRepo}`);
    return res
}

export async function getBranch(detail){
    const res = await axios.get(`${url}/${detail}/branches`);
    return res;
}

export async function getIssue(detail){
    const res = await axios.get(`${url}/${detail}/issues`);
    return res;
}



