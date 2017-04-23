import * as React from 'react';
import { Grid, Navbar, Nav, NavItem, Jumbotron, Button } from 'react-bootstrap';
import { Socket } from './Socket';


export class Upload extends React.Component {
    constructor(props) {
        super(props);
        this.state = {file: '',imagePreviewUrl: '', name: '', mLocation: ''};

     this._handleSubmit = this._handleSubmit.bind(this);
     this.nameChange = this.nameChange.bind(this);
     this.locationChange = this.locationChange.bind(this);
    }
    
    nameChange(e){
        this.setState({name: e.target.value});
    }
    
    locationChange(e){
        this.setState({mLocation: e.target.value});
    }
    
    _handleSubmit(e) {
        e.preventDefault();
        
        //this is just test code right now
        let scope = this;
        FB.getLoginStatus((response) => {
            if (response.status == 'connected') {
                Socket.emit('post', {
                        'facebook_user_token':
                response.authResponse.accessToken,
                'img': scope.state.imagePreviewUrl,
                'location': scope.state.mLocation,
                'plantname': scope.state.name
                });
            }
        });
    }
    
    ImageChange(e){
        e.preventDefault();
        let reader = new FileReader();
        let file = e.target.files[0];
    
        reader.onloadend = () => {
          this.setState({
            file: file,
            imagePreviewUrl: reader.result
          });
         console.log(reader.result)

        }
    
        reader.readAsDataURL(file)
    }
    
    
    render() {
        let {imagePreviewUrl} = this.state;
        let $imagePreview = null;
        if (imagePreviewUrl) {
          $imagePreview = (<img className="img" src={imagePreviewUrl} />);
        } else {
          $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
        }
        return(
            <div>
                

                <form>
                <label htmlFor="name">Enter a name:</label>
                <input id = "name" name= "name" type="text" value={this.state.name} onChange={(e)=>this.nameChange(e)} /> <br></br>
                <label htmlFor="location">Enter a location:</label>
                <input id = "location" name = "location" type="text" value={this.state.mLocation} onChange={(e)=>this.locationChange(e)} /> <br></br>
                  <div>
                    <label htmlFor="my-file">Select File:</label>
                    <center><input id="my-file" name="my-file" type="file" multiple onChange={(e)=>this.ImageChange(e)} /></center>
                  </div>
                  <button bsStyle="success" bsSize="large" type="submit" onClick={this._handleSubmit}>Upload</button>
                </form>
                <div className="imgPreview">
                    {$imagePreview}
                </div>
            </div>
        );
    }
}

