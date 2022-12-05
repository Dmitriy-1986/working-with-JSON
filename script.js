'use strict';

//https://dmitriy-1986.github.io/working-with-JSON/api.json

const container = document.querySelector('.container');

const request = new XMLHttpRequest();
request.open('GET', 'https://dmitriy-1986.github.io/working-with-JSON/api.json', true);
request.send();


request.addEventListener('load', function () {
    const data = JSON.parse(this.responseText);
    console.log(data.webApp["title"]);
    
    container.innerHTML = `<h1>${data.webApp["title"]}</h1>`; 
    container.innerHTML += `<a href="${data.webApp["uri"]}"><img src="${data.webApp["img"]}" alt="JSON"></a>`; 
    container.innerHTML += `<p><a href="${data.webApp["uri"]}">${data.webApp["uri"]}</a></p>`;  
    container.innerHTML += `<p>${data.webApp["description"]}</p>`;
    
});

