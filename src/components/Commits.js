import React from 'react'
import Commit from './Commit'
function Commits(props) {
    
    
        

    
    return (
        <div className="commits">
            
            {props.value.map((info) => (
                <Commit key={props.value.indexOf(info)} value={info} />
            ))}
             
        </div>
    )
}

export default Commits
