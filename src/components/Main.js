import React, { useState } from 'react'
import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel';
function Main() {
    const [Mdata,setMdata] = useState("");
    const [brnch,setBrnch] = useState("");
    const handle = (e) => {
        setMdata(e);
        setBrnch("");
    }

    const handleBranchName = (e) => {
        setBrnch(e);
    }

    return (
        <div className="main">
            <LeftPanel mainCallBack={handle} />
            <RightPanel mainCallBack={handleBranchName} branchValue={brnch} value={Mdata}/>
        </div>
    )
}

export default Main
