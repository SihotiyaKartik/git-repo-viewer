import React from 'react'
import Branch from './Branch';
function Branches(props) {
    
    const handle = (e) => {
    props.tabsCallBack(e);
    }
    return (
        <div className="branches">
            {
            props.value.map((info) => (
                <Branch value={info} branchesCallBack={handle} />
            ))
        }
        </div>
    )
}

export default Branches
