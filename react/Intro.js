import * as React from 'react';
import { Col, Row } from 'react-bootstrap';

export class Intro extends React.Component {
    
    render() {
        return(
            <div>
            <Row>
            <p><b>Welcome to the PlantBot site! This site allows you to post, share and track all
            of the cool plants you have seen while on trails in your city. To begin you need to 
            login through the FaceBook link above, until you login you will not be able to
            acess any of our applications cool features!</b></p>
            </Row>
            <Col>
                <Row>
                    <img src="/static/Flower1.jpg" width="80" height="80"></img>
                    <b> </b>
                    <img src="/static/Flower2.jpg" width="80" height="80"></img>
                    <b>  </b>
                    <img src="/static/Flower3.jpg" width="80" height="80"></img>
                </Row>
            </Col>
           
            </div>
        );
    }
}

