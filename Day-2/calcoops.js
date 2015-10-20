// Here we define an Object
// Treat this Object contains logic

// The Controller
// The Below Code is used to do the DOM
window.addEventListener("load",init);
function init(){
    document.getElementById("add").addEventListener("click",doOperation);
    document.getElementById("subtract").addEventListener("click",doOperation);
}

function doOperation(event){
    var firstNum = parseInt(document.getElementById("firstNo").value);
    if(isNaN(firstNum)) {
        firstNum = 0;
    }
    var secondNum = parseInt(document.getElementById("secondNo").value);
    if(isNaN(secondNum)) {
        secondNum = 0;
    }
   // var buttonValue = event.srcElement.value;
    var operator = event.srcElement.value;
    var expression = firstNum + operator + secondNum;
    console.log("Expression is ",expression);
    console.log(typeof expression);
    var result = eval(expression);
    //result = mathOperations[buttonValue](firstNum,secondNum);
  /*  if(buttonValue==="add"){
            result = mathOperations.add(firstNum,secondNum);
    }
    else
    if(buttonValue==="subtract"){
        result = mathOperations.subtract(firstNum,secondNum);
    }*/
    document.getElementsByTagName("div")[1].children[0].innerHTML=result;
}


