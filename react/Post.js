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
            var canvas = document.getElementById('canvas');
            var context = canvas.getContext('2d');
            img = new Image();
            img.onload = function() {
                if(img.width > canvas.width){
                    let ratio = img.width/200;
                    img.width = img.width/ratio;
                    img.height = img.height/ratio;
                }
                if(img.height > canvas.height){
                    let ratio = img.height/200;
                    img.width = img.width/ratio;
                    img.height = img.height/ratio;
                }
                context.clearRect(0, 0, 200, 200);
                context.drawImage(this, 0, 0, img.width, img.height);
            }
            img.src = this.props.post.URI;
        }
        return(

            <div className="post">
                <h3><strong>Search Results</strong></h3>
                <h3> {this.props.post.name} {this.props.post.user} {this.props.post.date} </h3>
                <br/>

                {img}
            </div>
            );
    }
}