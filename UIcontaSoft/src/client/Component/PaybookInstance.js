import React from 'react';
import fetch from 'node-fetch';
import { Route, Redirect } from 'react-router';

export default class PaybookInstance extends React.Component{

    constructor(props)
    {
        super();
        this.state = {
          TOKEN: localStorage.getItem('token'),
          data: props.data

        };
        console.log("constructor");
    }

    componentDidMount(){

    }

    static getDerivedStateFromProps(nextProps) {
      return {
        data: nextProps.data
      };
    }

    componentWIllUpdate(nextProps){

    }

    componentWillUnmount(){

    }

    render(){
        return(

                <div>

                  {
                    this.state.data.map( (item) =>
                      <span key={item.id}>
                        {item.month}
                        {item.status}

                        <br />
                      </span>

                    )
                  }

                </div>
        );
    }


}
