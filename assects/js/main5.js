let colors=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
let colorsItem =document.querySelectorAll(".color")
let inputColor=document.querySelector("input[name='color']  ")

colorsItem.forEach(function(item) {
  let  BaseColor=getcolor()
    item.style.backgroundColor=BaseColor
    item.addEventListener("click",function(){
        document.body.style.backgroundColor=BaseColor
        
        // item.classList.remove("selected-color")
        removeColor()
        item.classList.add("selected-color")
        // localStorage.setItem("bg-color",BaseColor)
        addcolorTolocal(BaseColor)
        
    })
});
function removeColor(){
    colorsItem.forEach(function(item) {
    item.classList.remove("selected-color")
});
}
function getcolor(){
    let color =""
    for(let i=0 ;i<6 ;i++){   
    
    let newcolor=parseInt(Math.random() * colors.length)
     color+= colors[newcolor]

    }

    return"#" + color
}
// console.log(getcolor());

window.onload=function(){
    document.body.style.backgroundColor=localStorage.getItem("bg-color") ?? "pink"
}

inputColor.addEventListener("change",function(){
    document.body.style.backgroundColor=inputColor.value
    addcolorTolocal(inputColor,value)
})

function addcolorTolocal(BaseColor){
    localStorage.setItem("bg-color",BaseColor)
}