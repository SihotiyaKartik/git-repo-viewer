import React from 'react'
import Tabs from './Tabs'
function RightPanel(props) {
    
    return (
        <div className="right">
            <div className="delete">
                
                {props.value ? (<p className="title">{props.value}</p>):(<></>)}
                
                
            </div>
            <Tabs value={props.value} />
        </div>
    )
}

export default RightPanel 
