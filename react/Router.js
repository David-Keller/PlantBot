import * as React from 'react';
import { Login } from './Login';
import { App } from './App';


export class App extends React.Component {
    
    constructor(props) {
        super(props);
    }
    
    render() {
        
        if(this.props.route=="login"){
            console.log("Going to login screen...");
            return(<Login />);
        }
        else{
            console.log("Going to application...");
            console.log(this.props);
            return(<App />);
        }
    }
}

