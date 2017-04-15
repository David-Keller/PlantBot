import * as React from 'react';
import { Result } from './Results';
import { Socket } from './Socket';

export class ResultContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {results: []};
    }
    
    componentDidMount(){
        Socket.on('results', function(data){
            var temp =[];
            for( var i in data){
                temp.push((<Result data = {i} />));
            }
            this.setState({results: temp});
        });
    }
    
    render(){

        return(
            <div className = "resultContainer">
                {this.state.results}
            </div>
            );
    }
}