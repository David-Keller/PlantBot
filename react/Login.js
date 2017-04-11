import * as React from 'react';

export class Login extends React.Component {
    constructor(props) {
        super(props);
    }
    
    
    render() {
        return(
            <div>
                <button onClick={function(){this.props.clicker("Bingo, Bango!")}.bind(this)}>Facebook Login</button>
                <h3>Please Log In</h3>
            </div>
            );
    }
}

