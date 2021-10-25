import React from 'react'
import Issue from './Issue'
function Issues(props) {
    return (
        <div className="issues">
            {props.value.map((info) => (
                <Issue key={props.value.indexOf(info)} value={info} />
            ))}
        </div>
    )

    }
export default Issues
