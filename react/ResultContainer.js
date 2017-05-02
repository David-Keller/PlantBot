import * as React from 'react';
import { Result } from './Result';
import { Socket } from './Socket';
import { Leaf } from './Leaf';

export class ResultContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {results: [],
                      center: [],
                      latons:[],
                      active: false
        };
    }
    
    componentDidMount(){
        var scope = this;
        Socket.on('results', function(data){
            
            var temp = [];
            var templatlons = [];
            // console.log(data);
            for( var i in data){
                temp.push( (<Result key = {data[i].id}  data = {data[i]} />));
            }

            for(var j in data){
            templatlons.push(data[j].latlon);
            // console.log(data[j].latlon);
            }
            scope.setState({latlons: templatlons});
            scope.setState({results: temp});
            scope.setState({center: data[0].center});
            scope.setState({active: true});

            

        });
    }
    
    render(){
        let map = (<div> </div>);
        if(this.state.active === true){
            console.log("resultContainer");
            console.log(this.state.latlons);
             map = (<Leaf latlons = {this.state.latlons} center = {this.state.center}/>);
        }
        return(
            <div className = "resultContainer">
                {map}
                {this.state.results}
            </div>
            );
    }
}