import * as React from 'react';

export class Login extends React.Component {
    constructor(props) {
        super(props);
    }
    
    
    render() {
        return(
            <div>
                <button onClick={function(){this.props.clicker("Bingo, Bango!")}.bind(this)}>Click Here when Logged In to FB</button>
                <h4>Login Above then Click to Continue!</h4>
            </div>
            );
    }
}

