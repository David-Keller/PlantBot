
import * as React from 'react';

export class Facebook extends React.Component {
    
    constructor(props) {
        super(props);
    }
    
    render() {
        return(<div class="fb-login-button" data-max-rows="1" data-size="xlarge" data-show-faces="true" data-auto-logout-link="true"></div>);
    }
}






