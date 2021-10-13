import React from 'react'
import Branch from './Branch';
function Branches(props) {
    
    return (
        <div className="branches">
            {
            props.value.map((info) => (
                <Branch value={info} />
            ))
        }
        </div>
    )
}

export default Branches
