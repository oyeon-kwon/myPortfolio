import React from 'react';
import './Intro.css';

function Intro () {
    return (
        <div>
            <div className="Imac">
                <div className="Desc">
                    <div className="subDesc">Hello I'm</div>
                    <div className="name">Ohyeon <br />Kwon</div> <br />
                    <div className="boldDesc">I am Full-stack developer</div><br />
                    <div className="subDesc">
                        I like finding out what's lacking of service and thinking about how to improve it<br />
                        I keep blogging on my dev blog, don't forget how to solve problems and communicate skills <br />
                        My final goal is to work as a web developer in the United States
                    </div>
                </div>
            </div>
            <div className="scroll"> Do you want to know about me? <br />let's scroll up! </div>

        </div>
    );
}

export default Intro;