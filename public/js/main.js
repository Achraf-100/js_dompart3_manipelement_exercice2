let exo1 = document.querySelector('h1')
exo1.innerText = 'Les attributs class et id'


let exo2 = document.querySelector('h2')
exo2.innerText = 'Exercice 2 partie A'



let exo3 = document.querySelectorAll('h2')[1]
exo3.innerText = 'Exercice 2 partie B'



let exo4 = document.querySelector('p')
exo4.innerHTML = `L'ajout de class et d'ID est assez simple, il suffit de connaitre les methodes <b>par coeur</b> `



let exo5 = document.querySelectorAll('p')[1]
exo5.innerHTML = `La manipulation de l'attribut Style peut-être une <i>solution</i> rapide`



let exo6 = document.querySelector('h1')
exo6.setAttribute('id', 'title')
console.log(exo6);



let exo7 = document.querySelector('div')
exo7.setAttribute('class', 'container')
console.log(exo7);



let exo8 = document.querySelectorAll('h2')
let exo88 = Array.from(exo8)
exo88.forEach(el => {
    el.setAttribute('class', 'title')
    console.log(el);
});



let exo9 = document.querySelectorAll('p')
let exo99 = Array.from(exo9)
exo99.forEach(el => {
    el.setAttribute('class', 'text')
    console.log(el);
});




let exo10 = document.querySelector('section')
exo10.setAttribute('class', 'margin-bottom border-black padding')
console.log(exo10);



let exo11 = document.querySelectorAll('section')[1]
exo11.setAttribute('class', 'margin-top border-black padding')
console.log(exo11);



let exo12 = document.querySelectorAll('section')[1]
let exo112 = exo12.children[2]
exo112.style.height = "20px"
exo112.style.border = "solid 2px red"
exo112.style.width = "20px"
exo112.style.backgroundColor = "blue"
console.log(exo112);
