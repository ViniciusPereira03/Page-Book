import React, { Component } from 'react';
import './styles/header.css';


export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="picture">
                    <img src={require("./assets/picture.png")}></img>
                </div>

                <div className="title-header">
                    <h1>DESIGN BETTER. FASTER. TOGETHER.</h1>
                </div>

                <div className="subtitle">
                    <p> The digital product design plataform powering the world's best user experiences </p>
                </div>

                <div className="header-info">
                    <div className="box">
                        <div className="icon">
                            <img src={require("./assets/calendar-green@2x.png")}></img>
                        </div>
                        <div className="text-info">
                            <p>CATEGORIA: <label> POR ONDE COMEÇAR</label></p>
                        </div>
                    </div>

                    <div className="box">
                        <div className="icon">
                            <img src={require("./assets/clock-green@2x.png")}></img>
                        </div>
                        <div className="text-info">
                            <p>01/ABRIL/2018</p>
                        </div>
                    </div>

                    <div className="box">
                        <div className="text-info">
                            <p>7 MIN LEITURA</p>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

