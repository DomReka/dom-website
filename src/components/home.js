import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './home';

class Home extends Component {
    render(){
        return(
            <container class="container">
                <div class="myPix">
                    <img src="../images/Me.jpg" alt="Me"/>
                </div>
            </container>
        )
    }
}

export default Home;