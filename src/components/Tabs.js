import axios from 'axios';
import React, {useState } from 'react'

import Branches from './Branches';
import Issue from './Issue';
function Tabs(props) {

    const [b,setB] = useState(false);
    const [i,setI] = useState(false);
    const [c,setC] = useState(false);
    const [branch,setBranch] = useState();
    const [issue,setIssue] = useState();
    
    async function handleB(){
        setB(true);
        setI(false);
        setC(false);
        const data = await axios.get(`https://api.github.com/repos/${props.value}/branches`);
        if(data){setBranch(data.data)}
        
    }

    async function handleI(){
        setB(false);
        setI(true);
        setC(false);
        const data = axios.get(`https://api.github.com/repos/${props.value}/issues`);
        if(data){setIssue(data.data);}
    }

    async function handleC(){
        setB(false);
        setI(false);
        setC(true);
    }

    return (
        <div className="tabs">
            <ul>
                <li onClick={handleB}> 
                    <a href="#">Branches</a>
                </li>
                <li onClick={handleI}>
                    <a href="#">Issues</a>
                </li>
                <li onClick={handleC}>
                    <a href="#">Commits</a>
                </li>
            </ul>
            
                {b && branch ? (<Branches value={branch} />):(<p>Hi</p>)}
            
        </div>
    )
}
 
export default Tabs
