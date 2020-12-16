//Referenced button and text area using queryselector
var btnTranslate = document.querySelector("#btn-translate");
var txtArea = document.querySelector("#text-input");
var outputTxtDiv = document.querySelector("#output-box");



var serverURL = "https://api.funtranslations.com/translate/dothraki.json";


function getTranslationURL(input){
    return serverURL + "?" + "text=" + input;
}

function errorHandler(error){
    console.log("error occured",error);
    
}

function clickHandler()
{
    
    var inputText = txtArea.value;

    fetch(getTranslationURL(inputText))
    .then(response=>response.json())
    .then(json=>{
        
        outputTxtDiv.innerText = json.contents.translated; 
    })
    .catch(errorHandler);

   
}



//Button EventListener
btnTranslate.addEventListener("click",clickHandler);