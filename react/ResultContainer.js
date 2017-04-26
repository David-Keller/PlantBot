import * as React from 'react';
import { Post } from './Post';
import { Socket } from './Socket';

export class ResultContainer extends React.Component {
    constructor(props){
        super(props);
        console.log("Results container rendering with posts:");
        console.log(this.props.posts);
    }
    
    render(){
        return(
            <div className = "postContainer">
                {this.props.posts.map(function(post, i){
                  console.log('Post rendering...');
                  console.log("Key:" + i);
                  console.log(post);
                  return <Post key={i}  post={post} />
                })}
            </div>
            );
    }
}