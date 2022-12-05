'use strict';

const title = document.querySelector('.title');
const list = document.querySelector('.list');

const uri = './api.json';

const request = new XMLHttpRequest();
request.open('GET', uri);
request.responseType = 'json';
request.send();

request.addEventListener('load', () => {
    const [data] = JSON.parse(this.web-app.data-page.title);
    console.log(data);
})
