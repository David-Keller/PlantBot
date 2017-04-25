import * as React from 'react';

export class Personal extends React.Component {
    
    render() {
        return(
            <div>
            <img src={this.props.user.url}></img>
            
            <br/>
            
            <h4>{this.props.user.name}</h4>
            </div>
            );
    }
}

