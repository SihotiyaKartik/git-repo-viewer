import React from 'react'

import Tabs from './Tabs'
function RightPanel(props) {
    
    

    const handle = (e) => {
        props.mainCallBack(e);
    }

    return (
        <div className="right">
            <div className="delete">
                
                {props.value ? (<p className="title">{props.value}</p>):(<></>)}
                {props.branchValue ? (<p>{props.branchValue}</p>):(<></>)}
                
            </div>
            <Tabs value={props.value} rightPanel={handle} />
        </div>
    )
}

export default RightPanel 
