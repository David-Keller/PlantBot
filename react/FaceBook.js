import * as React from 'react';
import FacebookLogin from 'react-facebook-login';

export class FaceBook extends React.Component {
    constructor(props) {
      super(props);
    };

    responseFacebook(response){
        console.log("FB Login says:");
        console.log(response);
    };
    componentClicked(event){
        console.log("FB Button got clicked!");
    };
    
    render() {
        return(
            <FacebookLogin
                appId="1415349178527947"
                autoLoad={true}
                fields="name,email,picture"
                onClick={this.componentClicked}
                callback={this.responseFacebook} />
        );
    }
}