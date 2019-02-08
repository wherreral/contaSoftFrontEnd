import React from 'react';
import fetch from 'node-fetch';
import { Route, Redirect } from 'react-router';

const API_LOADPBINSTANCE = "http://localhost:8080/api/paybookinstance/15961703-3";

export default class LoadPaybookInstance extends React.Component{

    constructor()
    {
        super();
        this.state = {
          data: []
        };
        console.log("constructor");
    }


    componentWillMount()
    {
      console.log("componentWillMount");
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

        return(

                <div>

                <form action = "http://localhost:8080/redirectImportBook" method = "post" encType = "multipart/form-data">
                    <div className="row">
                        <div className="col-12 col-sm-8 col-md-8 col-lg-8 col-xl-8 borde3">
                          <input type = "file" name = "fileUpload" size = "50" />
                        </div>
                        <div className="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 borde3">
                          <input type = "submit" value = "Upload File" />
                        </div>
                      </div>
                </form>
                </div>
        );
    }


}
