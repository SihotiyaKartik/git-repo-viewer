import React from 'react'

import Tabs from './Tabs'
function RightPanel(props) {
    
    

    const handle = (e) => {
        props.mainCallBack(e);
    }

    return (
        <div className="right">
            <div className="delete">
                
                {props.value ? (<p className="delete-repo">{props.value}</p>):(<></>)}
                {props.branchValue ? (<p className="delete-branch">{props.branchValue}</p>):(<></>)}
                
            </div>
            <Tabs value={props.value} rightPanel={handle} />
        </div>
    )
}

export default RightPanel 
