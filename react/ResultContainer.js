import * as React from 'react';
import { Result } from './Result';
import { Socket } from './Socket';

export class ResultContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {results: []};
    }
    
    componentDidMount(){
        var scope = this;
        Socket.on('results', function(data){
            var temp = [];
            console.log(data);
            for( var i in data){
                temp.push( (<Result key = {data[i].id}  data = {data[i]} />));
            }

            scope.setState({results: temp});
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