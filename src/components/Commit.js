import React from 'react'

function Commit(props) {
    let date = new Date(props.value.commit.author.date).toDateString();
    
    return (
        <div className="commit">
            <div className="commit-sub">
            <p className="date">{date}</p>

            <p className="msg">{props.value.commit.message}</p>            
            </div>
        </div>
    )
}

export default Commit
