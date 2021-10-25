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
                <Branch key={props.value.indexOf(info)} value={info} branchesCallBack={handle} />
            ))
        }
        </div>
    )
}

export default Branches
