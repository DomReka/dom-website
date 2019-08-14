import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './home';

class Home extends Component {
    render(){
        return(
            <div className="container">
                <div className="myPix">
                    <img className="pixOfMe" src={require('../images/Me.jpg')} alt="Me"/>
                </div>
                <div className="quote">

                </div>
                <h4> Welcome into my website !</h4>
            </div>
        )
    }
}

export default Home;