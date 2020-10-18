import React from 'react';
import './Tools.css';

class Tools extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          front: ['JavaScript', 'React', 'Redux', 'HTML', 'CSS'],
          back: ['Nodejs', 'Express', 'Django', 'Mysql', 'Sequelize', 'Postgresql'],
          design: ['photoshop', 'illustrator'],
          DeveloperTools: ['Git', 'NPM', 'AWS']
        }
      }
    render() {
      return (
      <div className="tools">
        <div className="tool">
          <div className="part">Front<br/></div>
          JavaScript <br />
          React <br />
          Redux <br />
          HTML <br />
          CSS <br />
        </div>
        <div className="tool">
        <div className="part">Back<br/></div>
          Nodejs <br />
          Express <br />
          Django <br />
          MySQL <br />
          Sequelize <br />
          PostgreSQL <br />
        </div>
        <div className="tool">
        <div className="part">Design<br/></div>
          PhotoShop <br />
          Illustrator <br />
        </div>
        <div className="tool">
        <div className="part">Developer Tools<br/></div>
          Git <br />
          NPM <br />
          AWS <br />
        </div>
      </div>
      
      );
    }
}

export default Tools;