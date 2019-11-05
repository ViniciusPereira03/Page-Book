import React, { Component } from 'react';


export default class Like extends Component{
    
    constructor(){
        super();
        this.state = {
            contador: 0,
        };
    }
    
    soma(){
        this.setState({
            contador: this.state.contador + 1,
        });
    }


    render(){
        return(
            <div className="like">
                <img onClick={this.soma.bind(this)} src={require("./assets/clap-gray-3@2x.png")} width="35"></img>
                <p>{this.state.contador}</p>
            </div>
        );
    }



}
