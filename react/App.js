import * as React from 'react';
import { Upload } from './Upload';
import { Banner } from './Banner';
import { FaceBook } from './FaceBook';
import { Intro } from './Intro';
import { Logo } from './Logo';
import { Login } from './Login';
import { Personal } from './Personal';

import { Grid, Navbar, Nav, NavItem, Jumbotron, Button, Col, Row } from 'react-bootstrap';
import { Search } from './Search';
import { ResultContainer } from './ResultContainer';

export class App extends React.Component {
    constructor(props) {
        super(props);
    }
    
    
    render() {
        
        if(this.props.route=="login"){
            console.log("Going to login screen...");
            return(<div className="plantBotLogin">
                        <Logo />
                        <Intro />
                    </div>
                    );
        }
        else{
            console.log("Going to application...");
            console.log(this.props);
            return(<div className="plantBotApp">
                
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
}

