import * as React from 'react';

export class Post extends React.Component {
    constructor(props){
        super(props);
    }
    componentDidMount(){
    if(this.props.post.URI != null){
            var canvas = document.getElementById("canvas" + this.props.post.id);
            var context = canvas.getContext('2d');
            var img = new Image();
            img.onload = function() {
                if(img.width > canvas.width){
                    let ratio = img.width/300;
                    img.width = img.width/ratio;
                    img.height = img.height/ratio;
                }
                if(img.height > canvas.height){
                    let ratio = img.height/150;
                    img.width = img.width/ratio;
                    img.height = img.height/ratio;
                }
                context.clearRect(0, 0, 300, 150);
                context.drawImage(this, 0, 0, img.width, img.height);
            }
            img.src = this.props.post.URI;
        }
    }
    render(){
        console.log("Post starting render...");
        console.log("State:");
        console.log(this.state);
        console.log("Props:");
        console.log(this.props);
        let img = (<canvas className="canvas" id={"canvas" + this.props.post.id} />)
        return(

            <div className="post">
                <h3><strong>Result #{this.props.post.id}</strong></h3>
                <h3> {this.props.post.name} {this.props.post.user} {this.props.post.date} </h3>
                <br/>
                {img}
            </div>
            );
    }
}