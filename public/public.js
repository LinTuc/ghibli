let data;
let visaInfo = function(id) {
    alert(`Original titel:\n${data[id].original.title}`);
}

window.onload = function() {
    let getData = new XMLHttpRequest();  
    getData.open("GET"," https://ghibliapi.herokuapp.com/films ", true); 
    getData.onload = function() {
        data = JSON.parse(this.response); 

        let merHtml = "";
        let outputOne= document.getElementsByClassName('outputOne')[0];
        let divbox=document.createElement("div");   
        for (let i = 0; i < data.length; i++) {   
            divbox.className+="divbox";
            divbox.innerHTML+= `<button class='btn' onclick="visaInfo(${i});"><img src="${data[i].image}"></button>`;
            outputOne.appendChild(divbox); 
        }
    }
    getData.send();   
}  