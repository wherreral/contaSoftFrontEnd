import React from 'react';
import fetch from 'node-fetch';
import { Route, Redirect } from 'react-router';
import TaxPayer from './TaxPayers';
import PaybookInstance from './PaybookInstance';
import LoadPaybookInstance from './LoadPaybookInstance';
import regeneratorRuntime from "regenerator-runtime";

const { private_rest_api, public_rest_api} = require('../functions/api.js');
const API_CLIENTS = "http://localhost:8080/api/clients";
const API_PBINSTANCE = "http://localhost:8080/api/paybookinstance/";

export default class Dashboard extends React.Component{

    constructor()
    {
        super();
        this.state = {
          TOKEN: localStorage.getItem('token'),
          data: [],
        };
        console.log("constructor");
    }

    componentDidMount(){
        console.log("componentDidMount");



    }

    componentWIllUpdate(nextProps){

    }

    componentWillUnmount(){

    }


    render(){


        return(
                <div>
                    <span>NEW TAX PAYER</span>
                    <div className="row" >
                      <div className="col-12 col-sm-8 col-md-8 col-lg-8 col-xl-8 borde3">
                      </div>
                    </div>
                </div>
        );
    }


}
