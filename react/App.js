import * as React from 'react';
//import { Button } from './Button';


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
                    <Button />                   

                    </div>
                </div>
                );
    }
}

