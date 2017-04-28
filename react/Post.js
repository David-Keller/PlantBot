import * as React from 'react';

export class Post extends React.Component {
    constructor(props){
        super(props);
    }
    
    render(){
        console.log("Post starting render...");
        console.log("State:");
        console.log(this.state);
        console.log("Props:");
        console.log(this.props);
        let img = (<div> </div>)
        if(this.props.post.URI != null){
            img = (<img className = 'img' src ={this.props.post.URI}/>);
        }
        return(
            <div className="post">
                <h3> {this.props.post.name} {this.props.post.user} {this.props.post.date} </h3>
                <br/>
                {img}
            </div>
            );
    }
}