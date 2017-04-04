import * as React from 'react';
import {TestButton } from './testbutton';
import {Upload} from './ImgUpload';
import { Socket } from './Socket';


export class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {file: '',imagePreviewUrl: ''};
    }
    
    componentDidMount() {
        Socket.on('img test', (data) => {
            this.setState({
                file:'test',
                imagePreviewUrl:data['img']
            });
            //console.log(data['img'])
        });
    }
    
    
    render() {
        
        let {imagePreviewUrl} = this.state;
        let $imagePreview = null;
        if (imagePreviewUrl) {
            $imagePreview = (<img className="img" src={imagePreviewUrl} />);
        } else {
            $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
        }
        
        
        return( <div>
                    <div className="plantBotApp">
                        <h1 className="banner">Hello from PlantBot!</h1>
                             <div
                        className="fb-login-button"
                        data-max-rows="1"
                        data-size="medium"
                        data-show-faces="false"
                        data-auto-logout-link="true">
                    </div>     
                    
                     <p>Welcome to the PlantBot site! This site allows you to post, share and track all
                     of the plants you have seen while on trails in your city. To begin you need to 
                     login through the FaceBook link above, until you login you will not be able to
                      acess any of our applications cool features!</p>
                     <TestButton />
                     <Upload />
                     </div>
                <div className="imgPreview">
                    {$imagePreview}
                </div>
                    
                </div>
                );
    }
}

