import React from 'react'

function Issue(props) {
    return (
        <div className="issue">
          <p>{props.value.title}</p>  
        </div>
    )
}

export default Issue
