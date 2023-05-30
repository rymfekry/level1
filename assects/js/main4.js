let tapcontant = document.querySelectorAll(".tab-contant")
let taptitel = document.querySelectorAll(".tab-titel")
// console.log(tapcontant,taptitel);

    
    taptitel.forEach(function(item){
            
        item.addEventListener("click",function(){
            // console.log(item);
        removeActive(taptitel)
        
        item.classList.add("active")
        let dataId = item.dataset.id
        removeActive(tapcontant)
        document.getElementById(dataId).classList.add("active")
    
            // console.log(dataId);
        })
        
    })

    function removeActive(items){
        items.forEach(function(element){
            element.classList.remove("active")
        })

    }

    // function removeActiveFromTapcontant(){
    //     taptitel.forEach(function(element){
    //         element.classList.remove("active")
    //     })

    // }