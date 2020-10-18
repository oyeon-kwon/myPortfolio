import React from 'react';
import './Toggle.css';

class Toggle extends React.Component {

    constructor(props){
        super(props)
    }
    
    render () {
        const { isdisplay } = this.props;

    return (
        <div>{
            isdisplay ? (<div>
                    <br/><br/><br/><br/>
                    <div className="toggle">
                    <div className="career">Career</div>
                    <br/>
                    <div className="period">also I worked in</div>
                    <br/>
                    <div className="company">
                        internship in GOODOC
                    </div>
                    <div className="period">
                        2015.04~07
                    </div>
                    <br/>
                    <div className="company">
                        founded CAFEGALLE app
                    </div>
                    <div className="period">
                        2016.01~2017.01
                    </div>
                    <br/>
                    <div className="company">
                        manager in UNIQLO
                    </div>
                    <div className="period">
                        2018.03~2019.11
                    </div>
                    <br/>
                    <div className="company">
                        CSE in CODESTATES
                    </div>
                    <div className="period">
                        2020.09~2021.02
                    </div>
                    </div>
            </div>) : null
        }</div>
    )
    }
}

export default Toggle;