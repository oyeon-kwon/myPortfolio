import React from 'react';
import './Nav.css';
import Modal from './Modal';
import Toggle from './Toggle';

class Nav extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isModalOpen: false,
        isToggleOpen: false
      }

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.clickToggle = this.clickToggle.bind(this);
    }

    openModal = () => {
        this.setState({ isModalOpen: true });
      };
    
    closeModal = () => {
    this.setState({ isModalOpen: false });
    };

    clickToggle = () => {
        this.setState({ isToggleOpen: !this.state.isToggleOpen })
    }

    render () {
        return (
            <div>
                <div className="navBox">
                    <div className="email" onClick={this.openModal}>email</div>
                    <Modal isOpen={this.state.isModalOpen} close={this.closeModal}/>
                    <div className="before" onClick={this.clickToggle} isDisplay={this.state.isToggleOpen}>What I did before</div> 
                    <Toggle isdisplay={this.state.isToggleOpen}></Toggle>
                </div>
            </div>
        )
    }
}
export default Nav;