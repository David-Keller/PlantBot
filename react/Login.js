import * as React from 'react';
import { Logo } from './Logo';
import { Intro } from './Intro';

export class Login extends React.Component {
    constructor(props) {
        super(props);
    }
    
    
    render() {
        return(
            <div className="plantBotLogin">
                    <Logo />
                    <Intro />
                </div>
            );
    }
}

