import React from 'react'

function Branch(props) {
    console.log(props.value);
    return (
        <div className="branch">
            <p>{props.value.name}</p>
        </div>
    )
}

export default Branch
