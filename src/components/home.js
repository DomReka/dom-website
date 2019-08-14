import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './home';

class Home extends Component {
    render(){
        return(
            <div className="container-fluid">
                <div className="myPix">
                    <img className="pixOfMe" src={require('../images/Me.jpg')} alt="Me"/>
                </div>
                <div className="quote">
                    {/* <q>Be grateful or be great, fool.</q> */}
                    <q>Hey there, <br />I'm Dom, and I'm a Web Developer</q>
                </div>
            </div>
        )
    }
}

export default Home;