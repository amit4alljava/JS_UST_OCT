window.addEventListener("load",init);
/*
To Do initalize
 */
var firstNo;
var secondNo;
function init(){
    firstNo = document.getElementById("firstNo");
    secondNo = document.getElementById("secondNo");
    // Here I am Binding the Event Click with DoOperation
    // Late Call
    document.getElementById("add").addEventListener("click",doOperation);
    document.getElementById("subtract").addEventListener("click",doOperation);
}
function doOperation(event){
    var result = 0;
    var buttonValue = event.srcElement.value;
    console.log("Button value is ",buttonValue);

    if(buttonValue=="add"){
        result = parseInt(firstNo.value) + parseInt(secondNo.value);
    }
    else
    if(buttonValue=="subtract"){
        result = firstNo.value - secondNo.value;
    }
    document.getElementsByTagName("div")[1].children[0].innerHTML=result;
        }