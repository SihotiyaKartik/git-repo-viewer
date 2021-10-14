import React from 'react'
import Issue from './Issue'
function Issues(props) {
    return (
        <div className="issues">
            {props.value.map((info) => (
                <Issue value={info} />
            ))}
        </div>
    )

    }
export default Issues
