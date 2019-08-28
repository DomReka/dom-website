import React, {Component} from 'react'
import {
    Card,
    Button,
    CardTitle,
    CardText,
    Row,
    Col
} from 'reactstrap';

export default class Works extends Component {
    render() {
        return (
            <div className="container worksContainer">
                <h5>Works & Studies</h5>
                <Row>
                    <Col sm="6">
                        <Card body>
                            <CardTitle>Studies</CardTitle>
                            <CardText>
                                
                            </CardText>
                            <Button>Go somewhere</Button>
                        </Card>
                    </Col>
                    <Col sm="6">
                        <Card body>
                            <CardTitle>Works</CardTitle>
                            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                            <Button>Go somewhere</Button>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}
