import React from 'react'

const Repo = ({value}) => {

return(

  
  <div className="repo-body">
  <div className="repo-name">
      <p>{value.data.name}</p>
  </div>
  <div className="repo-desc">
      <p>{value.data.description}</p>
  </div>
  <div className="repo-utils">
  <div className="subitem">
      <i className="fa fa-code" />
      <span>{value.data.language}</span>
    </div>
    <div className="subitem">
      <i className="fa fa-star" />
      <span>{value.data.stargazers_count}</span>
    </div>
    <div className="subitem">
      <i className="fa fa-code-fork" />
      <span>{value.data.forks}</span>
    </div>
  </div>
</div>

);
}

export default Repo
