let contantinfo = document.querySelector ("h1")
let btnincre = document.querySelector(".btn-iencrase")
let btndecre = document.querySelector(".btn-decrase")
// let fulldescreption = document.querySelector(".full-contant")
let colors =["red","pink","yellow","green","orange","black","blue"]
// console.log(btnincre,btndecre)

btnincre.addEventListener ("click",function(){
    // if(contantinfo.textContent<10){
        // contantinfo.textContent=(+contantinfo.textContent)+1
    // }
    contantinfo.textContent=(+contantinfo.textContent)+1
    contantinfo.parentElement.style.backgroundColor = getColor()
    contantinfo.parentElement.style.color ="white"
})

btndecre.onclick = function(){
    if(+contantinfo.textContent>0){
        contantinfo.textContent=+contantinfo.textContent-1
        contantinfo.parentElement.style.backgroundColor = getColor()
        contantinfo.parentElement.style.color ="white"
    }

}
function getColor(){
    let randomColor = parseInt(Math.random() * 7)
    return colors[randomColor]
}
// getColor()
