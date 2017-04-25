import * as React from 'react';
import { Socket } from './Socket';

export class Result extends React.Component {
    constructor(props){
        super(props);
        let data = props.data
        this.state = {
                    img: [], // late loaded
                    name: data.name,
                    user: data.user,
                    date: data.date,
                    id: data.id,
                    key: data.id
        };
    }
    
    componentDidMount(){
        var scope = this;
        Socket.on(this.state.id, function(data){
            scope.setState({img: data['img']});
            console.log("img recived");
        });
        FB.getLoginStatus((response) => {
            if (response.status == 'connected') {
                console.log("img request");
                Socket.emit('img request', {
                    'facebook_user_token':
                        response.authResponse.accessToken,
                        'id': scope.state.id
                });
            }
        });
    }
    
    
    
    render(){
        let name = this.state.name;
        let user = this.state.user;
        let date = this.state.date;
        let img = (<div> </div>)
        if(this.state.img != null){
            img = (<img className = 'img' src ={this.state.img}/>);
        }
        return(
            <div className = "result">
                <h3><strong>Search Results</strong></h3>
                <h3> {name} {user} {date} </h3>
                {img}
            </div>
            );
    }
}