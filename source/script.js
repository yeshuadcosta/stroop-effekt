const text = ['red','orange','yellow','green','blue','pink','purple','white','black','brown'];
const color = ['#ff0000','#FFA500','#FFFF00','#2BB02B','#4169E1','#FF647F','#6C0BA9','white','black','#964B00'];
const len = text.length;

// Storing the time in seconds
let time = localStorage.getItem("duration");

let word = document.querySelector('#word');
let index1 = 0, pIndex1 = 0;
let index2 = 0, pIndex2 = 0;

setInterval(() => {
    do {
        index1 = Math.floor(Math.random() * len);
        index2 = Math.floor(Math.random() * len);
    } while(index1 == pIndex1 || index2 == pIndex2);
    word.style.color = color[index1];
    word.innerHTML = text[index2];

    pIndex1 = index1;
    pIndex2 = index2;
}, (time*1000));