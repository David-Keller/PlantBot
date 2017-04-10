import * as React from 'react';
import { Upload } from './Upload';
import { Socket } from './Socket';
import { Banner } from './Banner';
import { FaceBook } from './FaceBook';
import { Intro } from './Intro';
import { Logo } from './Logo';

export class App extends React.Component {
    constructor(props) {
        super(props);
    }
    
    
    render() {
        return(<div className="plantBotApp">
                    <Banner />
                    <Logo />
                    <FaceBook clicker={this.props.clicker}/>
                    <Intro />
                    <Upload />
                </div>
                );
    }
}

