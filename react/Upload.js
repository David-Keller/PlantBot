import * as React from 'react';
import { Col, Row } from 'react-bootstrap';

export class Upload extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            file: '',
            imagePreviewUrl: ''
        };

     this._handleSubmit = this._handleSubmit.bind(this);
    }

    _handleSubmit(e) {
        e.preventDefault();
        //this is just test code right now
        let scope = this;
        console.log("IMAG:");
        console.log(scope.state.imageBase64);
        console.log("LOCT:");
        console.log(document.getElementsByName("location")[0].value);
        console.log("NAME:");
        console.log(document.getElementById("objname").value);
        // TODO - Feed back into Main.js for socket work
    }
    
    ImageChange(e){
        e.preventDefault();
        let reader = new FileReader();
        let file = e.target.files[0];
        reader.onloadend = () => {
            this.setState({
                file: file,
                imageBase64: reader.result
            });
            var canvas = document.getElementById('canvas');
            var context = canvas.getContext('2d');
            var img = new Image();
            img.onload = function() {
                if(img.width > canvas.width){
                    let ratio = img.width/canvas.width;
                    img.width = img.width/ratio;
                    img.height = img.height/ratio;
                }
                if(img.height > canvas.height){
                    let ratio = img.height/canvas.height;
                    img.width = img.width/ratio;
                    img.height = img.height/ratio;
                }
                context.clearRect(0, 0, canvas.width, canvas.height);
                context.drawImage(this, 0, 0, img.width, img.height);
            }
            img.src = reader.result;
        }
    
        reader.readAsDataURL(file);
    }

    render(){
        return(
            <div style={{"text-align":"left"}}>
                <Row>
                <label htmlFor="objname">Enter a name:</label>
                <input id="objname" name="objname" type="text"/>
                </Row>
                <Row>
                <label htmlFor="location"> Enter a location:</label>
                <input id="location" name="location" type="text"/>
                </Row>
                <Row>
                <label htmlFor="my-file">Photo:</label>
                <input id="my-file" name="my-file" type="file" onChange={(e)=>this.ImageChange(e)} />
                </Row>
                <Row>
                <button type="submit" onClick={this._handleSubmit}>Upload</button>
                <canvas style={{margin:"auto"}} className="canvas" id="canvas" />
                </Row>
            </div>
        );
    }
}

