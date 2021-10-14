import React from 'react'
import { useState} from 'react';
import axios from 'axios'
import Modal from 'react-modal';
import Repos from './repos';



function LeftPanel(props){

    const [data,updateData] = useState([]);
    const [username,setUsername] = useState("");
    const [repo,setRepo] = useState("");
    const [open,setOpen] = useState(false);
    function openModal(){
        setOpen(true);
    };
    function closeModal(){
        setOpen(false);
    };
    function updateName(e){
        setUsername(e.target.value);
    };
    function updateRepo(e){
        setRepo(e.target.value);
    };
    const handleSubmit = async e => {
        e.preventDefault();
        const profile = await axios.get(`https://api.github.com/repos/${username}/${repo}`);
        
        if(profile){
            updateData([...data,profile]);
        }
        setOpen(false);
        setUsername("");
        setRepo("");
        
    };

    const handle = (e) => {
        props.mainCallBack(e);
    }


    return (
        <div>
            <>
            <Repos value={data} leftCallBack={handle} />
            </>
            <div className="contain-plus">
            <button onClick={openModal} className="repo-add"><i className="fa fa-plus fa-2x"></i></button>
            <Modal
            isOpen={open}
            onRequestClose={closeModal}
            className="react-modal"
            ariaHideApp={false}>
                <h2>ADD NEW REPOSITORY</h2>    
                <form>
                <label htmlFor="name">Owner / Organization</label>    
                <input type="text" id="name" onChange={updateName} required />
                <label htmlFor="repo">Repository Name</label>
                <input type="text" id="repo" required onChange={updateRepo} />
                <button type="submit" onClick={handleSubmit}>ADD</button>   
                </form>   

            </Modal>
            </div>
        </div>
    )
}

export default LeftPanel
