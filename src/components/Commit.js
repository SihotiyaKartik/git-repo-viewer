import React from 'react'

function Commit(props) {
    let date = new Date(props.value.commit.author.date).toDateString();
    return (
        <div className="commit">
            <p className="date">{date}</p>
            <p className="msg">{props.value.commit.message}</p>
            <div className="commit-item">
                <img src={props.value.author.avatar_url} height="30" width="30" alt="avatar"></img>
                <p>{props.value.author.login}</p>
            </div>
        </div>
    )
}

export default Commit
