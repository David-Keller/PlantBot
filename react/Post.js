import * as React from 'react';
import { Socket } from './Socket';

export class Post extends React.Component {
    constructor(props){
        super(props);
        let data = props.post
        this.state = {
                    img: [], // late loaded
                    name: data.name,
                    user: data.user,
                    date: data.date,
                    id: data.id,
                    key: data.id
        };
    }
    
    render(){
        console.log("Post starting render...");
        console.log("State:");
        console.log(this.state);
        console.log("Props:");
        console.log(this.props);
        let name = this.state.name;
        let user = this.state.user;
        let date = this.state.date;
        let img = (<div> </div>)
        if(this.state.img != null){
            img = (<img className = 'img' src ={this.state.img}/>);
        }
        return(
            <div>
                <h3> {name} {user} {date} </h3>
                {img}
            </div>
            );
    }
}