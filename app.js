var textinput = document.querySelector("#txt-input")
var textbtn = document.querySelector("#txt-btn-translate");
var textoutput = document.querySelector("#txt-output")

var ServerURL = "https://api.funtranslations.com/translate/minion.json"

// function for getting the appended url
function getUrl(text){
    return ServerURL+ "?"+"text="+text;
}

// function for printing server error on console
function errorHandler(error){
console.log("Error occured: ",error);
} 

//function for calling api
function callApi(text){
  fetch(getUrl(text))
.then( response => response.json())
.then( json => textoutput.innerText = json.contents.translated)
.catch(errorHandler);
}

textbtn.addEventListener("click" , () => { callApi(textinput.value) });