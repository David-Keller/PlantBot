import * as React from 'react';
import { Col, Row } from 'react-bootstrap';



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
                <h3>Enter search criteria</h3>
                <form>
                <Row>
                    <label htmlFor="name">Name:</label>
                    <input id = "name" type="text"/>
                    <label htmlFor="location">  Location:</label>
                    <input id = "location" type="text"/>
                </Row>
                <Row>
                    <label htmlFor="date"> Date: </label>
                    <input id = "date" type="date"/>
                    <button type="button" onClick={this._handleSubmit}>Search</button>
                </Row>
                </form>
            </div>
            );
    }
}
