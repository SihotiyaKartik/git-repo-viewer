import React from 'react'

function Branch(props) {
    
    const trigger = () => {
        props.branchesCallBack(props.value.name);
    }


    return (
        <div className="branch" onClick={trigger}>
            
            <p>{props.value.name}</p>
        </div>
    )
}

export default Branch
