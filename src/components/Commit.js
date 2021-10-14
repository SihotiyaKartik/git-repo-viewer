import React from 'react'

function Commit(props) {
    return (
        <div className="commit">
            <p>{props.value.commit.message}</p>
        </div>
    )
}

export default Commit
