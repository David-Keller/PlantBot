import * as React from 'react';
import { Post } from './Post';
import { Socket } from './Socket';

export class ResultContainer extends React.Component {
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <div className = "postContainer">
                {this.props.data.map(function(item, i){
                  console.log('Post rendering...');
                  console.log("Key:" + i);
                  console.log(item);
                  return <Post key={i}  data={item} />
                })}
            </div>
            );
    }
}