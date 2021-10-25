import React from 'react'

function Issue(props) {
    return (
        <div className="issue">
          <div className="issue-sub">
          <p>{props.value.title}</p>
        <div className="issue-item">
        <p>#{props.value.number} opened by</p>   
        <p className="issue-item-p"> {props.value.user.login}</p>
        <img src={props.value.user.avatar_url} height="30" width="30" alt="avatar-url"></img>
            
        </div>  
        </div>
        </div>
    )
}

export default Issue
