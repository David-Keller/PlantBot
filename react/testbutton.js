import * as React from 'react';

import { Socket } from './Socket';

//this is just a testing button and will not end up in final version

export class TestButton extends React.Component {
    handleSubmit(event) {
        event.preventDefault();
        FB.getLoginStatus((response) => {
            if (response.status == 'connected') {
                Socket.emit('search', {
                    'facebook_user_token':
                    response.authResponse.accessToken,
                    'name': "rose"
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