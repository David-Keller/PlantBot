import * as React from 'react';
import { Col, Row } from 'react-bootstrap';

export class Upload extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            file: '',
            imagePreviewUrl: '',
            submit:props.upload
        };

     this._handleSubmit = this._handleSubmit.bind(this);
     this.ImageChange = this.ImageChange.bind(this);
    }

    _handleSubmit(e) {
        e.preventDefault();
        let data = {base64:this.state.imageBase64, name:document.getElementById("objname").value, location:document.getElementsByName("location")[0].value};
        this.state.submit(data);
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
            <div style={{"textAlign":"left"}}>
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

