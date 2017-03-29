import * as React from 'react';
import { Leaf } from './Leaf';

export class App extends React.Component {
    
    render() {
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
                     
                    </div>
                    <Leaf />
                </div>
                );
    }
}

