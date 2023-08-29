import React, {useEffect, useState} from "react";

//import More from '../../images/more.svg';

import './exibe.css'

import HeaderMain from "../../components/HeaderMain/HeaderMain";

import axios from "axios";

 

function Exibe(){

    const[userData,setdata] = useState([]);
   
 
    

  useEffect(()=>{
    axios.get("https://comercial.cnpj.ws/cnpj/18748484000117?token=rOc9NEDMzZSpsvRKbpwk3EW5Pm7VAMobUoZJs7sD4BmW")
    .then((response)=>{
        console.log(typeof response.data)
        setdata(response.data)
    })
  },[])
    

    return(
       
        
        <div>

        <HeaderMain />

        <main>

            <div className="cards">

               

                 
                        
                        <div className="card" >

                        <h2>HTTP Request</h2>
       <p>Numero da inscrição: {userData?.estabelecimento?.cnpj}</p>

       <p>Data de Abertura: {userData?.simples?.data_opcao_simples}</p>
       <p>Razão Social: {userData?.razao_social}</p>
       <p>Nome Fantasia: {userData?.estabelecimento?.nome_fantasia} </p>
       <p>Porte: {userData?.porte?.descricao}</p>
       <p>Codigo e Descrição da atividade economica principal: {userData?.estabelecimento?.atividade_principal?.id}</p>
       <p>Codigo da Natureza Juridica: {userData?.natureza_juridica?.id}</p>
       <p>Logradouro: {userData?.estabelecimento?.logradouro} </p>
       <p>Numero: {userData?.estabelecimento?.numero} </p>
       <p>CEP: {userData?.estabelecimento?.cep}  </p>
       <p>Bairro: {userData?.estabelecimento?.bairro}</p>
       <p>Municipio: {userData?.estabelecimento?.cidade?.nome}</p>
       <p>UF: {userData?.estabelecimento?.estado?.sigla} </p>
       <p>Endereço Eletronico: {userData?.estabelecimento?.email} </p>
       <p>Telefone 1: {userData?.estabelecimento?.telefone1}</p>
       <p>Telefone 2: {userData?.estabelecimento?.telefone2}</p>
       <p>Situação Cadastral: {userData?.estabelecimento?.situacao_cadastral} </p>
    
    
                            <div className="line"></div>

                            <p></p>

                            <div className="btns" >

                                <div className="btn-edit" >
                                    
                                </div>

                                <div className="btn-readmore" >
                                
                                </div>

                                <div className="btn-delete" >
                                    
                                </div>

                            </div>
                        </div>
                    

                

                
            </div>

        </main>
        
    </div>
 
    )
}

export default Exibe