import React from 'react'

function Branch(props) {
    
    const trigger = () => {
        props.branchesCallBack(props.value.name);
    }


    return (
        <div className="branch">
            <div className="branch-sub" onClick={trigger}>
            {props.value.name}
            </div>
        </div>
    )
}

export default Branch
