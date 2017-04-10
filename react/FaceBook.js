import * as React from 'react';

export class FaceBook extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            logout:"true",
            clicker:function(){props.clicker()}
        }
    }
    
    render() {
        return(<div className="fb-login-button" data-max-rows="1" data-size="xlarge" data-show-faces="true" data-auto-logout-link={this.state.logout} onClick={this.state.clicker}></div>);
    }
}






