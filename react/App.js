import * as React from 'react';
import { Upload } from './Upload';
import { Logo } from './Logo';
import { Personal } from './Personal';
import { Search } from './Search';
import { ResultContainer } from './ResultContainer';
import { Grid, Navbar, Nav, NavItem, Jumbotron, Button, Col, Row } from 'react-bootstrap';

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
                        <Col xs={12} md={3}>
                            <Logo />
                        </Col>
                        <Col xs={12} md={6}>
                            <Search search={this.props.search}/>
                        </Col>
                        <Col xs={12} md={3}>
                            <h4>PlantBot</h4>
                        </Col>
                    </Row>
                        
                    {/* APLICATION */}
                    <Row>
                        <Col xs={12} md={3}>
                            <Personal user={this.props.user}/>
                        </Col>
                        <Col xs={12} md={6}>
                            <ResultContainer posts={this.props.posts} />
                        </Col>
                        <Col xs={12} md={3}>
                            <Upload  upload={this.props.upload}/>
                        </Col>
                    </Row>

                    </Grid>      
              </div>
            );

    }
}

