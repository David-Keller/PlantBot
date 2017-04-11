import * as React from 'react';
import { Upload } from './Upload';
import { Socket } from './Socket';
import { Banner } from './Banner';
import { FaceBook } from './FaceBook';
import { Intro } from './Intro';
import { Logo } from './Logo';
import { Login } from './Login';

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
                        <Login clicker={this.props.clicker}/>
                        <Intro />
                    </div>
                    );
        }
        else{
            console.log("Going to application...");
            return(<div className="plantBotApp">
                        <Banner />
                        <Logo />
                        <FaceBook />
                    </div>
                );
        }
    }
}

