import React from 'react';
import './Modal.css';

class Modal extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          email: ""
      }
    
    this.emailHandler = this.emailHandler.bind(this);
    }

    emailHandler = () => {
        const inputvalue = document.querySelector(".inputEmail").value;
        this.setState({
            email: inputvalue
        })
    }

    render () {
        const { isOpen, close } = this.props;

        return (
            <div>{
            isOpen ? (
                <div className="Modal">
                <div className="ModalBox">
                    <span className="close" onClick={close}>&times;</span>
                    <div className="desc">이메일을 입력해주시면 이력서를 보내드립니다.</div>
                    <input type="email" className="inputEmail" placeholder="please enter your email"></input>
                    <button onClick={this.emailHandler} value={this.state}>send</button>
                </div>
                </div>
            ) : null
            }</div>
        )
    }
}
export default Modal;