document.querySelector('#button').addEventListener('click', () => {
    let duration = document.getElementById('duration').value;
    console.log(duration);
    localStorage.setItem("duration",duration);
});

let ins = document.querySelectorAll('.ins');
const color = ['white','black'];
let index = 0;
//Setting ins mode
setInterval(() => {
    for (let x = 0; x<3; x++){
        ins[x].style.color = color[index];
        index++;
        if (index === 2)
            index = 0;
    }
},900);