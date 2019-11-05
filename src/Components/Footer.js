import React, { Component } from 'react';
import './styles/footer.css';
import Like from './Like.js';



export default class Footer extends Component {
    render() {
        return (
            <div className="footer">

                <div className="tags">
                    <div className="title-tag">
                        <label>TAGS: </label>
                    </div>
                    <div className="tags-btn">
                        <button>DIY</button>
                        <button>Vendas</button>
                        <button>Aplicativo</button>
                        <button>Lorem</button>
                        <button>Ipsum</button>
                        <button>Amet</button>
                    </div>
                </div>

                <div className="footer-icons">

                    <div className="icon-footer">
                        <img src={require("./assets/if-whatsapp-853339@2x.png")} width="20"></img>
                    </div>

                    <div className="icon-footer">
                        <img src={require("./assets/if-entoni-facebook-330869@2x.png")} width="13"></img>
                    </div>

                    <div className="icon-footer">
                        <img src={require("./assets/twiter@2x.png")} width="20"></img>
                    </div>

                    <div className="icon-footer">
                        <img src={require("./assets/if-linkedin-853357@2x.png")} width="17"></img>
                    </div>

                    <div className="icon-footer">
                        <img src={require("./assets/mail@2x.png")} width="20"></img>
                    </div>

                    <div className="icon-footer">
                        <label> | </label>
                    </div>

                    <div className="icon2-footer">
                        
                        <Like />

                    </div>

                    

                </div>

            </div>
        );
    }
}
