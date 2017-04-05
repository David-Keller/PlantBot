import * as React from 'react';
import {TestButton } from './testbutton';
import {Upload} from './ImgUpload';
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
                    <FaceBook />
                    <Intro />
                    <TestButton />
                    <Upload />
                </div>
                );
    }
}

