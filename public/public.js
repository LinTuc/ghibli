let data;
let visaInfo = function(id) {
    alert(data[id].description);
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
            divbox.innerHTML+= `<button class='btn' onclick="visaInfo(${i});"><img src="${data[i].movie_banner}"></button>`;
            outputOne.appendChild(divbox); 
        }
    }
    getData.send();   
}  