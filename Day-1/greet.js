// this event will call when Window is Load
window.addEventListener("load",init);


function init(){
document.getElementById("greetButton").addEventListener("click",displayMessage);
}
    function displayMessage(){
    var userName = document.getElementById("txtName").value;
    document.getElementsByTagName("p")[0].children[0].innerHTML=userName;
}