import * as React from 'react';

import { Banner } from './Banner';
import { FaceBook } from './FaceBook';
import { Intro } from './Intro';

export class App extends React.Component {
    
    render() {
        return(<div className="plantBotApp">
                    <Banner />
                    <FaceBook />
                    <Intro />
                </div>
                );
    }
}

