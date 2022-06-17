var btnTranslate = document.querySelector("#btn-translate");  //Button
var txtInput = document.querySelector("#txt-input");  //Input
var outputDiv = document.querySelector("#output");  //Output

var serverurl = "https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(text){
    return serverurl + "?"+"text=" + text  //appending text to url
}

function errorHandler(error){
    console.log("error occured ", error);
    alert("Something went wrong with server!!")
}

function clickHandler() {
    
    var inputTxt = txtInput.value;
    fetch(getTranslationURL(inputTxt))
        .then(response => response.json())  //Converting response to JSON
        .then(json => {
        var translatedText = json.contents.translated;  //Translated text
        outputDiv.innerText = translatedText;
})
        .catch(errorHandler) //no need to pass error
};

btnTranslate.addEventListener("click",clickHandler) //onclick do this