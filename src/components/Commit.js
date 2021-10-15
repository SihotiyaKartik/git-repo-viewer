import React from 'react'

function Commit(props) {
    let date = new Date(props.value.commit.author.date).toDateString();
    console.log(props.value);
    return (
        <div className="commit">
            <p className="date">{date}</p>

            <p className="msg">{props.value.commit.message}</p>            
            
        </div>
    )
}

export default Commit
