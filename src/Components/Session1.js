import React, { Component } from 'react';
import './styles/session1.css';
import Like from './Like.js';



export default class Session1 extends Component {


    render() {
        return (
            <div className="session-1">
                <div className="left-menu">
                    
                    <Like />

                    <hr></hr>
                    <div className="icons">
                        <div className="icon">
                            <img src={require("./assets/if-whatsapp-853339@2x.png")} width="20"></img>
                        </div>

                        <div className="icon">
                            <img src={require("./assets/if-entoni-facebook-330869@2x.png")} width="13"></img>
                        </div>

                        <div className="icon">
                            <img src={require("./assets/twiter@2x.png")} width="20"></img>
                        </div>

                        <div className="icon">
                            <img src={require("./assets/if-linkedin-853357@2x.png")} width="17"></img>
                        </div>

                        <div className="icon">
                            <img src={require("./assets/mail@2x.png")} width="20"></img>
                        </div>

                    </div>

                </div>

                <div className="text">
                    <p>
                        Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um  desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.
          </p>
                    <p>
                        Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um  desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado.
          </p>
                </div>

            </div>
        );
    }
}
