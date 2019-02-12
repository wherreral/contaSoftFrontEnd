import React from 'react';
//import Request from 'superagent';
import fetch from 'node-fetch';

const API = "http://localhost:8080/api/getTemplates";
let j;
export default class Home extends React.Component{

    constructor()
    {
        super();
        this.state= {
             data: []
        };
        console.log("constructor");
    }


    componentWillMount()
    {
      console.log("componentWillMount");
      fetch(API)
      .then( res => {
        let json = res.json();
        return json;
      })
      .then(data => {
        this.setState( {data:data} );
      });


    }

    componentDidMount(){


    }

    componentWillReceiveProps(nextProps){

    }

    componentWIllUpdate(nextProps){

    }

    componentWillUnmount(){

    }

    render(){
        if (this.state.data.length > 0) {
              console.log(this.state.data.length);
        }
        return(
          <div>
          <h1> Templates {this.props.txt}</h1>

            {this.state.data.map((item) =>
              <div>
                <span id="fieldName" key={item.id}>
                  {item.fieldName}
                </span>
                <span id="fieldDescription" key={item.id}>
                  :{item.fieldDescription}
                <br/>
                </span>
              </div>
              //" "+item.id+" "+item.fieldName+" "+item.fieldDescription
            )}
            <button type="button" id="template_button">Crear Template</button>


          </div>
        );
    }


}
