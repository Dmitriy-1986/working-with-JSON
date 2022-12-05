'use strict';

const title = document.querySelector('.title');
const list = document.querySelector('.list');

const uri = 'https://github.com/Dmitriy-1986/working-with-JSON/blob/main/api.json';

const request = new XMLHttpRequest();
request.open('GET', uri);
request.responseType = 'json';
request.send();

request.addEventListener('load', () => {
    const data = JSON.parse(this.webApp);
    console.log(data.dataPage.title);
});
