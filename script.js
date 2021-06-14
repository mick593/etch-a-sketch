const container = document.getElementById('container')
let div
let colDiv
for(let i = 0; i < 9; i++){
    colDiv = document.createElement('div')
    for(let j = 0;j < 9; j++) {
        div = document.createElement('div')

        // div.style.width = 33%
        div.classList.add('box')
        div.style.marginTop = 0;
        colDiv.appendChild(div)
    }
    colDiv.classList.add('col-box')
    container.appendChild(colDiv)
}


window.addEventListener('mouseover', function(e) {
    console.log(e.target.classList[0] === 'box')
    if(e.target.classList[0] === 'box')
    e.target.classList.add('box-red')
})

const btn = document.querySelector('#btn')
btn.addEventListener('click',clean)

function clean() {
    const list = document.querySelectorAll ('.box');
    // console.log(list)
    list.forEach(element => 
        element.classList.remove('box-red')
    );
}