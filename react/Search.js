import * as React from 'react';

export class Search extends React.Component{
    constructor(props){
        super(props);
        
        this._handleSubmit = this._handleSubmit.bind(this);
    }
    
    _handleSubmit(e) {
        console.log("Search submitted!");
        let search = {
            name: document.getElementById("name").value, 
            date: document.getElementById("date").value, 
            location: document.getElementById("location").value,
            distance: 20
        };
        console.log(search);
        this.props.search(search);
    }
    
    render(){
        
        
        return(
            <div>
                <form>
                    <label htmlFor="name">Enter a name:</label>
                    <input id = "name" type="text"/>
                    <label htmlFor="location">Enter a location:</label>
                    <input id = "location" type="text"/>
                    <label htmlFor="date"> Enter a date: </label>
                    <input id = "date" type="date"/>
                    <button type="button" onClick={this._handleSubmit}>Search</button>
                </form>
            </div>
            );
    }
}