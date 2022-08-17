const container = document.querySelector('.container')
const start = document.querySelector('.start')
const reset = document.querySelector('.reset')

let color = -0.0

function change(){
    color += 0.1
    if(color >= 1){
        reset.style.display = 'flex'
    }
    container.setAttribute("style", "background: rgb(0, 0, 0, 0" + color + ")")
    start.style.display = 'none'
}

function resetChange(){
    container.style.background = 'transparent'
    location.reload()
}