import * as React from 'react';
import { Upload } from './Upload';
import { Socket } from './Socket';
import { Banner } from './Banner';
import { FaceBook } from './FaceBook';
import { Intro } from './Intro';
import { Logo } from './Logo';
import { Login } from './Login';

import { Grid, Navbar, Nav, NavItem, Jumbotron, Button, Col } from 'react-bootstrap';
import { Search } from './Search';
import { Result } from './Results';
import { ResultContainer } from './ResultContainer';

export class App extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
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
            return(<div className="plantBotApp">
                
                    <Grid>
                    //TOP SEARCH BAR
                        // LOGO, 25%W
                        <Col xs={12} md={3}>
                            <Logo />
                        </Col>
                        // SEARCH, 50%W
                        <Col xs={12} md={6}>
                            <Search />
                        </Col>
                        // APPNAME, 25%W
                        <Col xs={12} md={3}>
                            <h4>PlantBot</h4>
                        </Col>
                    // APPLICATION AREA
                        // USER, 33%W
                        <Col xs={12} md={4}>
                            //<Personal/>
                        </Col>
                        // RESULTS, 33%W
                        <Col xs={12} md={4}>
                            <ResultContainer />
                        </Col>
                        // UPLOAD, 33%W
                        <Col xs={12} md={4}>
                            <Upload />
                        </Col>

                    </Grid>      
              </div>
                );

        }
    }
}

