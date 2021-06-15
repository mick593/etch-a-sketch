setup(64,64)
let brushColor = 'pink'
function changeColor() {
    let r = Math.floor(Math.random() * 255)
    let g = Math.floor(Math.random() * 255)
    let b = Math.floor(Math.random() * 255)
    console.log(r,g,b)
    brushColor = `rgb(${r},${g},${b})`;

}

window.addEventListener('mouseover', function(e) {
    console.log(e.target.classList[0] === 'box')
    if(e.target.classList[0] === 'box') {
        // e.target.classList.add('box-red')
        e.target.att
        e.target.style.backgroundColor = brushColor
        //e.style.setProperty('width', '12.5%')
    }
    
})

const btn = document.querySelector('#btn')
btn.addEventListener('click',clean)

const changeColorBtn = document.querySelector('#colorBtn')
changeColorBtn.addEventListener('click',changeColor)

function setup(w,h) {
    const container = document.getElementById('container')
    let div
    let colDiv
    for (let i = 0; i < 8*64/h; i++) {
        colDiv = document.createElement('div')
        colDiv.setAttribute('style', `height : ${h}px`)
        for (let j = 0; j < 8*64/w; j++) {
            div = document.createElement('div')

            // div.style.width = 33%
            div.classList.add('box')
            
            // div.setAttribute('style', `width : ${w}px`)
            div.style.width = `${w}px`
            div.style.height = `${h}px`
            // div.style.setProperty('width', '12.5%')
            // div.setAttribute('style', `height : ${h}px`)
            colDiv.appendChild(div)
        }
        colDiv.classList.add('col-box')
        container.appendChild(colDiv)
    }
}

function clean() {
    const list = document.querySelectorAll ('.col-box');
    // console.log(list)
    let c = 'pink'
    const container = document.getElementById('container')
    list.forEach(element => 
        // element.removeAttribute('style',`background: ${c}`)
        container.removeChild(element)


    );
    
    let size = prompt('Size px?(5-100)')
    if(size >= 5 && size < 100) setup(size,size)
    else if (!size) return
    else clean()

}