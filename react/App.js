import * as React from 'react';
import { Upload } from './Upload';
import { Socket } from './Socket';
import { Banner } from './Banner';
import { FaceBook } from './FaceBook';
import { Intro } from './Intro';
import { Logo } from './Logo';

//import 'bootstrap/dist/css/bootstrap.css';
import { Grid, Navbar, Nav, NavItem, Jumbotron, Button } from 'react-bootstrap';

export class App extends React.Component {
    constructor(props) {
        super(props);
    }
    
    
    render() {
        return(<div className="plantBotApp">
        <Jumbotron>
          <Grid>
            <h1><Banner /></h1>
            <Logo />
            <FaceBook />
            <Intro />
            <p class="label"><Upload /></p>
          </Grid>
        </Jumbotron>
      </div>
    );
            
    }
}

