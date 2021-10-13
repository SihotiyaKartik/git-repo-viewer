import React from 'react'

function Repo(props){


return(

  <div className="repo-body" >
  <div className="repo-name">
      <p>{props.value.data.name}</p>
  </div>
  <div className="repo-desc">
      <p>{props.value.data.description}</p>
  </div>
  <div className="repo-utils">
  <div className="subitem">
      <i className="fa fa-code" />
      <span>{props.value.data.language}</span>
    </div>
    <div className="subitem">
      <i className="fa fa-star" />
      <span>{props.value.data.stargazers_count}</span>
    </div>
    <div className="subitem">
      <i className="fa fa-code-fork" />
      <span>{props.value.data.forks}</span>
    </div>
  </div>
</div>

);
}

export default Repo
