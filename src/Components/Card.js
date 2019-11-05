import React, { Component } from 'react';
import './styles/card.css';
import Like from './Like.js';


export default class Card extends Component {
    render() {
        return (
            <div className="session-5">
                <div className="card">
                    <div className="text-card">
                        <label>DESIGNER BETTER. FASTER. TOGETHER.</label>
                        <p>Lorem ipsun é simplesmente uma pequena simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizada desde o século XVII amet dollor aint.</p>
                    </div>
                    <div className="card-info">
                        <div className="info-left">

                            <div className="box">
                                <div className="icon">
                                    <img src={require("./assets/calendar-green@2x.png")}></img>
                                </div>
                                <div className="text-info">
                                    <p>01/ABRIL/2018</p>
                                </div>
                            </div>


                            <div className="box">
                                <div className="icon">
                                    <img src={require("./assets/clock-green@2x.png")}></img>
                                </div>
                                <div className="text-info">
                                    <p>7 MIN LEITURA</p>
                                </div>
                            </div>


                            <div className="box">
                                < Like />
                            </div>

                        </div>
                        <div className="info-right">
                            <div className="picture">
                                <img src={require("./assets/picture.png")}></img>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        );
    }
}
