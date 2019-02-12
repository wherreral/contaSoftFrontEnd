import React from 'react';
import fetch from 'node-fetch';
import { Route, Redirect } from 'react-router';


const API_CLIENTS = "http://localhost:8080/api/clients";

export default class TaxPayers extends React.Component{

    constructor(props)
    {
        console.log("constructor");
        super();
        this.state = {
          TOKEN: localStorage.getItem('token'),
          data: props.data
        };
        this.handleOnClick = this.handleOnClick.bind(this);

    }

    static getDerivedStateFromProps(nextProps) {
      return {
        data: nextProps.data
      };
    }

    componentDidMount(){
      //this.setState({data: []})
    }


    componentWIllUpdate(nextProps){

    }

    componentWillUnmount(){

    }


    handleOnClick(event) {
      if(typeof event === 'undefined')
      {
        console.log('es undefined');
      }else{
        console.log(event.currentTarget.attributes['data-id'].value);
        const val = event.currentTarget.attributes['data-id'].value;
        this.props.callback(val);
      }

    }

    render(){
        if (this.state.data.length > 0) {
              console.log(this.state.data.length);
        }else {
          console.log(0);
        }
        //console.log(this.state.payLoad);
        return(
                <div>

                  {


                    this.props.data.map( (item) =>
                    //this.state.payLoad.map( (item) =>
                    <div className="row" onClick={this.handleOnClick} key={item.id} data-id={item.id}>
                      <div className="col-12 col-sm-8 col-md-8 col-lg-8 col-xl-8 borde3">
                        <span key={item.id}>
                          {item.name}
                          <br />
                        </span>
                      </div>
                    </div>
                    )
                  }

                </div>
        );
    }


}
