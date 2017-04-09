import * as React from 'react';

export class FaceBook extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            logout:"true"
        }
    }
    
    render() {
        return(<div className="fb-login-button" data-max-rows="1" data-size="xlarge" data-show-faces="true" data-auto-logout-link={this.state.logout}></div>);
    }
}






