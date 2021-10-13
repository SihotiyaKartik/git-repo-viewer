import React, { useState } from 'react'
import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel';
function Main() {
    const [Mdata,setMdata] = useState("");
    const handle = (e) => {
        setMdata(e);
    }
    return (
        <div className="main">
            <LeftPanel mainCallBack={handle} />
            <RightPanel value={Mdata}/>
        </div>
    )
}

export default Main
