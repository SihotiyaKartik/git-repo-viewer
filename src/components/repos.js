import React, { useState } from 'react'
import Repo from './repo'
function Repos(props){


    const handle = (e) => {
        props.leftCallBack(e);
    }
    
    return (
        <div className="repos">
            {
            props.value.map((info) => (
                
                 <Repo className="active" index={props.value.indexOf(info)} value={info} reposCallBack={handle} />   
                
            ))
            }
        </div>
    )
}

export default Repos

