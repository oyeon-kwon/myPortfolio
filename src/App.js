import React from 'react';
import './App.css';
// import { Controller, Scene } from 'react-scrollmagic';
import Intro from './Intro';
import Tools from './Tools';
import Projects from './Projects';
import Contacts from './Contacts';
import Nav from './Nav';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {

    return (
      <div className="box">
        {/* 소개 페이지 */}
        <div className="box">
          <Nav />
        </div>
        <div className="box">
          <Intro />
        </div>
        {/* 사용 스택 */}
        <div className="box">
          <Tools />
        </div>
        {/* 프로젝트 */}
        <div className="box">
          <Projects />
        </div>
        {/* 연락 */}
        <div className="box">
          <Contacts />
        </div>
      </div>
    )

  };
}

export default App;
