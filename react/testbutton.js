import * as React from 'react';

import { Socket } from './Socket';

export class TestButton extends React.Component {
    handleSubmit(event) {
        event.preventDefault();
        FB.getLoginStatus((response) => {
            if (response.status == 'connected') {
                Socket.emit('user test', {
                    'facebook_user_token':
                    response.authResponse.accessToken
                });
            }
        });
        console.log('sent up the fb info')
    }
    
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <button>Send FB test info</button>
            </form>
        );
    }
    
 
    
}