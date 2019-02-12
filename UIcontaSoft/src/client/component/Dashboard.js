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
          pbInstance: []
        };
        console.log("constructor");
    }

    async componentDidMount(){
        console.log("componentDidMount");

        const response = await private_rest_api( API_CLIENTS, "GET", false);
        const json = await response;
        if(typeof json === 'undefined')
          console.log('Se debe mostrar error');
        else{
          console.log('json:'+json[0].id);
          //rescato primer valor
          const firstValue = json[0].id;
          this.setState( {data:json} );

          const response2 = await private_rest_api( API_PBINSTANCE+firstValue, "GET", false);
          const json2 = await response2;
          if(typeof json2 === 'undefined')
            console.log('Se debe mostrar error');
          else{
            console.log('json2:'+json2[0].id);
            this.setState( {pbInstance:json2} );
          }
        }
    }

    componentWIllUpdate(nextProps){

    }

    componentWillUnmount(){

    }

    async formChild1(params) {
          console.log('en el padre:'+params);
          var tpId = params;
          const response = await private_rest_api( API_PBINSTANCE+tpId, "GET", false);
          const json = await response;
          if(typeof json === 'undefined')
            console.log('Se debe mostrar error');
          else{
            console.log('json:'+json);
            this.setState( {pbInstance:json} );
          }
          //this.setState( {pbInstance:[]} );
      //this.setState({
        //data : params
      //});
    }

    render(){

        const greeting = 'Welcome to React';
        if (this.state.data.length > 0) {
              console.log(this.state.data.length);
        }
        else {
          console.log('undefined');
        }
        if (this.state.pbInstance.length > 0) {
              console.log(this.state.pbInstance.length);
        }
        else {
          console.log('undefined');
        }

        return(
                <div>
                  <LoadPaybookInstance />
                  <TaxPayer data={this.state.data} callback={this.formChild1.bind(this)} />
                  <PaybookInstance data={this.state.pbInstance}/>
                </div>
        );
    }


}
