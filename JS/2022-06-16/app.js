const divElement = document.getElementById('main');

const h2 = document.createElement('h2')
const para = document.createElement('p');
const ul = document.createElement('ul');
const para2 = document.createElement('p');
const li = document.createElement('li');

const firstText = document.createTextNode('tekstas1');
const secondText = document.createTextNode('tekstas2');
const thirdText = document.createTextNode('tekstas3');


h2.appendChild(firstText);
para.appendChild(secondText);
ul.appendChild(li);
para2.appendChild(thirdText);


divElement.appendChild(h2);
divElement.appendChild(para);
divElement.appendChild(ul);
divElement.appendChild(para2);





