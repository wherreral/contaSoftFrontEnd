import regeneratorRuntime from "regenerator-runtime";


function handleErrors(response) {
    if (!response.ok) throw Error(response.status);
    return response;
}

function private_rest_api(URL, METHOD, REDIRECT){

  var TOKEN = localStorage.getItem('token');

  var myHeaders = new Headers();
  myHeaders.append("content-type", "application/json");
  myHeaders.append("Authorization", TOKEN);

  return fetch( URL ,{
        method: METHOD,
        headers: myHeaders
        //body: JSON.stringify( payload )
  })
  .then(handleErrors)
  .then(response => response.json())
  .catch( err => console.log(err))
  ;
}


function public_rest_api( URL, METHOD ){

  var myHeaders = new Headers();
  myHeaders.append("content-type", "application/json");
  //myHeaders.append("Authorization", this.state.TOKEN);

  fetch(URL, {
      method: METHOD,
      headers: myHeaders
      //body: JSON.stringify( payload )
  })
  .then( response => {
    if (response.ok) {
      //return response.json();
      let json = response.json();
      return json;
    } else {
      //throw new Error('Something went wrong');
      window.location.href = '/';
    }
      //console.log(response);

  })
  .then(data => {
      this.setState( {data:data} );
  })
  .catch( err => {
      console.log(err);
  });
}

/*
function private_rest_api( URL, METHOD, REDIRECT) {

  var ret = {
    status: "OK",
    errorCode: "",
    errorMessage: "",
    payLoad: []
  };

  var TOKEN = localStorage.getItem('token');

  var myHeaders = new Headers();
  myHeaders.append("content-type", "application/json");
  myHeaders.append("Authorization", TOKEN);

fetch(URL, {
      method: METHOD,
      headers: myHeaders
      //body: JSON.stringify( payload )
  })
  .then( response => {
    if (response.ok) {
        let json = response.json();
        return json;
    } else {
      //throw new Error('Something went wrong');
        //window.location.href = '/';
        ret.status ="NOK";
        ret.errorMessage = "Something went wrong";
        ret.errorCode = "001";
        return ret;
    }

  })
  .then(data => {
      //this.setState( {data:data} );
      console.log("payLoad:"+data);
      ret.payLoad = data;
      console.log("retFUnc:"+ret.payLoad[0].id);
      return ret;
  })
  .catch( err => {
      console.log(err);
      ret.status ="NOK";
      ret.errorMessage = "Something went wrong";
      ret.errorCode = "001";
      return ret;
  });

}
*/
module.exports = { private_rest_api, public_rest_api};
