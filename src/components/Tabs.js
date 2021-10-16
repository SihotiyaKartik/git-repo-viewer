import axios from 'axios';
import React, {useState } from 'react'
import Commits from './Commits';
import Branches from './Branches';
import Issues from './Issues';
function Tabs(props) {

    const [b,setB] = useState(false);
    const [i,setI] = useState(false);
    const [c,setC] = useState(false);
    const [branch,setBranch] = useState();
    const [issue,setIssue] = useState();
    const [commit,setCommit] = useState();
    
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
        const data = await axios.get(`https://api.github.com/repos/${props.value}/issues`);
        if(data){setIssue(data.data);}
        
    }

    async function handleC(){
        setB(false);
        setI(false);
        setC(true);
    }

    const handle = async e => {
        const data = await axios.get(`https://api.github.com/repos/${props.value}/commits?sha=${e}`);
        if(data){setCommit(data.data)}
        props.rightPanel(e);
        
    }

    return (
        <div className="tabs">
            <ul>
                <li onClick={handleB}> 
                    <p>Branches</p>
                </li>
                <li onClick={handleI}>
                    <p>Issues</p>
                </li>
                <li onClick={handleC}>
                    <p>Commits</p>
                </li>
            </ul>
                {(!b  && !i && !c) ? (<div className="null-tab"></div>):(
                    <>
                        {b && branch ? (<Branches value={branch} tabsCallBack={handle} />):(<></>)}
                         {i && issue ? (<Issues value={issue} />):(<></>)}
                        {c && commit ? (<Commits value={commit} />):(<></>)}

                    </>

                )}
                
        </div>
    )
}
 
export default Tabs
