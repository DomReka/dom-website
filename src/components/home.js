import React, {Component} from 'react';
import './home';


class Home extends Component {
    render() {

        return (
            <div className="container-fluid homeWrapper">
                <div className="container homeContainer">
                    <h1>DOMINIQUE BOSMAN</h1>
                    <div className="underliner"></div>
                    <div className="photoWrapper">
                        <img className="photo fadeIn" src={require('../images/Me.jpg')} alt="Dominique Bosman" />
                    </div>
                    <h3>Développeur Web Junior - Front End</h3>
                </div>
            </div>
        )
    }
}

export default Home;