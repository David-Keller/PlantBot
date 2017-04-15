import * as React from 'react';
import { Socket } from './Socket';

export class Search extends React.Component{
    constructor(props){
        super(props);
        
        this.state = { name: '', date: '', location: ''}        
        
         this._handleSubmit = this._handleSubmit.bind(this);
         this.nameChange = this.nameChange.bind(this);
         this.locationChange = this.locationChange.bind(this);
         this.dateChange = this.dateChange.bind(this);
    }
    
    nameChange(e){
        this.setState({name: e.target.value});
    }
    
    locationChange(e){
        this.setState({mLocation: e.target.value});
    }
    dateChange(e){
        
    }
    
    _handleSubmit(e) {
        
    }
    
    render(){
        
        
        return(
            <div>
                <form>
                    <label for="name">Enter a name:</label>
                    <input id = "name" type="text" value={this.state.name} onChange={(e)=>this.nameChange(e)} />
                    <label for="location">Enter a location:</label>
                    <input id = "location" type="text" value={this.state.mLocation} onChange={(e)=>this.locationChange(e)} />
                    <label for="date"> Enter a date: </label>
                    <input id = "date" type="date" value ={this.state.mdate} onChange = {(e)=>this.dateChange(e)} />
                    <button type="submit" onClick={this._handleSubmit}>Search</button>
                </form>
            </div>
            );
    }
}