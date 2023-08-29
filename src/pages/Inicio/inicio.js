import React from "react";

import Header from "../../components/Header/Header";

import More from '../../images/more.svg';

import './inicio.css'

function Inicio(){
    return(
        

        <div>
            <Header/>
            <main>
                    <div className="cards">
                        <div className="card">
                            <header>
                                <h2>TITULO API</h2>
                                <img src={More} alt=""></img>
                            </header>
                            
                            <div className="line"></div>

                            <p>SUBTITULO DA API</p>
                        </div>
                    </div>
                </main>
           
        </div>
    )
}

export default Inicio