import * as React from 'react';
import { Upload } from './Upload';
import { Logo } from './Logo';
import { Personal } from './Personal';


import { Search } from './Search';
import { ResultContainer } from './ResultContainer';
import { Grid, Navbar, Nav, NavItem, Jumbotron, Button, Col, Row, font, h4 } from 'react-bootstrap';

export class App extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
            console.log("Going to application...");
            console.log(this.props);
            return(
                <div className="plantBotApp">
                    <Grid>
                    {/* SEARCH BAR */}
                    <Row>  
                        <Col xs={10} md={2}>
                            <h4><strong>PlantBot</strong></h4>
                        </Col>
                        <Col xs={10} md={6}>
                            <Search search={this.props.search}/>
                        </Col>
                        <Col xs={10} md={2}>
                             <Personal user={this.props.user}/>
                        </Col>
                    </Row>
                        
                    <Row>

                        <Col xs={10} md={2}>
                            <Logo />
                        </Col>
                        <Col xs={10} md={6}>
                            <ResultContainer posts={this.props.posts} />
                        </Col>
                        <Col xs={10} md={2}>
                            <Upload  upload={this.props.upload}/>
                        </Col>
                    </Row>

                    </Grid>      
              </div>
            );

    }
}

