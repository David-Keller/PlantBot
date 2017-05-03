import * as React from 'react';

export class Personal extends React.Component {
    
    render() {
        return(
            <div>
            <img src={this.props.user.url} width="60" height="60"></img>
            
            <br/>

            <h3>{this.props.user.name}</h3>
            </div>
            );
    }
}

