import React, { Component } from 'react'
import ReactModal from 'react-modal';

export class plus extends Component {

    constructor(props){
        super(props);
        this.state =  {
            open:false
        }
        this.setTrue = this.setTrue.bind(this);
        this.setFalse = this.setFalse.bind(this);
    }
    setTrue(){
        this.setState({
            open:true
        });
    }

    setFalse(){
        this.setState({
            open:false
        });

    }


    render() {
        return (
            <div>
                <p className="repo-add" onClick={this.setTrue}><i className="fa fa-plus"></i></p> 
                <ReactModal 
                className="react-modal"
                isOpen={this.state.open} onRequestClose={this.setFalse}>
                   <h2>ADD NEW REPOSITORY</h2>
                   <div className="modal-col">
                    <label for="owner">Owner / Organization</label>
                    <input type="text" id="owner" />
                    <label for="repo">Repository Name</label>
                    <input type="text" id="repo" />
                    <button>ADD</button>
                    </div>
                </ReactModal>    
            </div>
        )
    }
}

export default plus
