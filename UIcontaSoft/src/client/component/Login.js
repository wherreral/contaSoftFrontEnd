import React from 'react';
import fetch from 'node-fetch';
import { Route, Redirect } from 'react-router';

const API_SIGNIN = "http://localhost:8080/login";
const API_SIGNUP = "http://localhost:8080/public/api/sign-up";

export default class Login extends React.Component{

    constructor()
    {
        super();
        this.state = {TOKEN: ''};
        this.handleSingIn = this.handleSingIn.bind(this);
        this.handleSingUp = this.handleSingUp.bind(this);
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

    handleSingIn() {

      console.log("SingIn");

      let username = $("#user").val();
      let password = $("#password").val();
      console.log("user;"+username);
      console.log("password;"+password);

      var payload = {
          "username": username,
          "password": password
      };

      var myHeaders = new Headers();
      myHeaders.append("content-type", "application/json");
      //myHeaders.append("charset","UTF-8'");

      fetch(API_SIGNIN, {
          method: "POST",
          headers: myHeaders,
          body: JSON.stringify( payload )
      })
      .then( response => {

          if (response.ok)
          {
            let token = response.headers.get('Authorization');
            console.log(response);
            console.log(response.headers.get('Authorization'));
            console.log(response.status);
            //save token into localStorage
            localStorage.setItem('token', token);
            this.setState({ TOKEN: token });
            window.location.href = '/dashboard/';
          }
          else{
            console.log('Login Fail');
          }

          //let json = res.json();
          //return json;
      })
      .then(data => {
          //alert( JSON.stringify( data ));
          //now i have to reDirect to the dashboard

      });

    }

    handleSingUp() {

        console.log("SingUp");
        console.log("asd "+this);
        let username = $("#user").val();
        let password = $("#password").val();
        console.log("user;"+username);
        console.log("password;"+password);

        var payload = {
            "username": username,
            "password": password
        };

        var myHeaders = new Headers();
        myHeaders.append("content-type", "application/json");
        //myHeaders.append("charset","UTF-8'");

        fetch(API_SIGNUP, {
            method: "POST",
            headers: myHeaders,
            body: JSON.stringify( payload )
        })
        .then( res => {
          let json = res.json();
          return json;
        })
        .then(data => {
          alert( JSON.stringify( data ));
        });

    }

    render(){
        return(
          <div>
          <div className="row">
              <div className="col-12 col-sm-8 col-md-8 col-lg-8 col-xl-8 borde3">
                <input type="text" name="" id="user" placeholder="User" />
              </div>
          </div>
          <div className="row">
              <div className="col-12 col-sm-8 col-md-8 col-lg-8 col-xl-8 borde3">
                <input type="text" name="" id="password" placeholder="Password" />
              </div>
          </div>
          <div className="row">
              <div className="col-12 col-sm-8 col-md-8 col-lg-8 col-xl-8 borde3">
                <input type="button" name="" id="send_button" value="Sign Up"  onClick={this.handleSingUp} />
              </div>
          </div>
          <br />
          <div className="row">
              <div className="col-12 col-sm-8 col-md-8 col-lg-8 col-xl-8 borde3">
                <input type="button" name="" id="sing_button" value="Sing In" onClick={this.handleSingIn} />
              </div>
          </div>

          </div>
        );
    }


}
