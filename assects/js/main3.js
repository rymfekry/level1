let btns=document.querySelectorAll(".btn")
// let text=document.querySelector("p")
let colors =["red","pink","yellow","green","orange","black","blue"]

btns.forEach(function(item){
    item.addEventListener("click",getaction)
})

    function getaction(){
        this.parentElement.style.backgroundColor =getcolors()
        this.parentElement.style.color ="white"
        // text.textContent=parseInt(text.textContent)+1
        let card= this .closest(".card")
        let para =card.querySelector("p")
        let contant=parseInt(para.textContent)
        para.textContent =contant +1
    }




    function getcolors(){
    let randomcolor =parseInt( Math.random() * colors.length)
    return colors[randomcolor]
}