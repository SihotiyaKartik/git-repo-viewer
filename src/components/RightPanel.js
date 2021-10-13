import React from 'react'
import Tabs from './Tabs'
function RightPanel(props) {
    
    return (
        <div className="right">
            <div className="delete">
                <p>Delete</p>
            </div>
            <Tabs value={props.value} />
        </div>
    )
}

export default RightPanel 
