
let Data;
let html={};

window.onload = function() {

    getData = new XMLHttpRequest();
    getData.open("GET"," https://ghibliapi.herokuapp.com/films ", true); 
    getData.onload = function(){
        console.log(this.response)
        Data = JSON.parse(this.response);
        let i = 0;
        let divElement= document.getElementsByClassName('outputOne')[0];
        let divbox=document.createElement("div");
    for(i = 0; i < Data.length; i++) {
        divbox=document.createElement("div");
        divbox.className+="divbox";
        divbox.innerHTML+="<button id='btn"+i+"'><img src='"+Data[i].image+"'/></button>";
        divElement.appendChild(divbox);
        }
 
    }

    getData.send();
    
}

    




