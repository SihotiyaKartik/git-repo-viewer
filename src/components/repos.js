import React from 'react'
import Repo from './repo'
function Repos(props){

    


    const handle = (e) => {
        props.leftCallBack(e);
    }
    
    return (
        <div className="repos">
            {
            props.value.map((info) => (
                
                 <Repo key={props.value.indexOf(info)} value={info} reposCallBack={handle} />   
                
            ))
            }
        </div>
    )
}

export default Repos

