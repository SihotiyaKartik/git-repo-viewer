import React from 'react'
import Repo from './repo'
const Repos = ({value}) => {
    
    return (
        <div className="repos">
            {
            value.map((info) => (
                 <Repo value={info} />   
            ))
            }
        </div>
    )
}

export default Repos

