import React, {Component} from 'react';

class About extends Component {
    state = {}
    render() {
        return (
            <div className="container-fluid aboutWrapper">
                <div className="container aboutMe">
                    <h5>About me</h5>
                    <p>
                        Imagine a regular guy, who grew up with music, IT stuff, and learned everything
                        he can until he can mixing it up to be who he is right now. That's me, I do all
                        I can with passion at the maximum of my capacities.
                    </p>
                </div>
            </div>
        );
    }
}

export default About;