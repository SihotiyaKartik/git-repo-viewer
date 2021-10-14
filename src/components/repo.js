import React from 'react'


function Repo(props){
 
  
  const Trigger = () => {
  props.reposCallBack(props.value.data.full_name);
  }

return(

  <div key={props.index} className="repo-body" onClick={Trigger}>
  
  <div className="main-subitem">
  <div className="repo-name">
      <p>{props.value.data.name}</p>
  </div>
  <div className="repo-type">
    <p>Public</p>
  </div>
  </div>

  <div className="repo-desc">
      <p>{props.value.data.description}</p>
  </div>
  <div className="repo-utils">
  <div className="subitem">
      <i className="fa fa-code fa-lg" />
      <span>{props.value.data.language}</span>
    </div>
    <div className="subitem">
      <i className="fa fa-star fa-lg" />
      <span>{props.value.data.stargazers_count}</span>
    </div>
    <div className="subitem">
      <i className="fa fa-code-fork fa-lg" />
      <span>{props.value.data.forks}</span>
    </div>
  </div>
</div>

);
}

export default Repo
