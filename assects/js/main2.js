let mainimg = document.getElementById("mainimg")
let innerimg =document.querySelectorAll(".innerimg")
let prev=document.getElementById("Prev")
let next=document.getElementById("Next")
let state=0
// let img1 = document.getElementById("firstimg")
// let img2 = document.getElementById("secondimg")
// let img3 = document.getElementById("thirdimg")
// let img4 = document.getElementById("fourthimg")
// console.log(mainimg,img1,img2,img3,img4);

next.addEventListener("click",function(){
    if(state < innerimg.length){
        state=state+1
        mainimg.src = innerimg[state].src
    }
    else{
        state=0
        mainimg.src = innerimg[state].src
    }
})

prev.addEventListener("click",function(){
    state=state-1
    if(state>=0){
        
        mainimg.src = innerimg[state].src
    }
    else{
        state=innerimg.length-1
        mainimg.src = innerimg[state].src
    }
})

    for(let i=0 ;i<innerimg.length ;i++){
        innerimg[i].addEventListener("click",function(){
            let imgReplace = innerimg[i].src
            mainimg.src = imgReplace
            // console.log("tyuiuu");
        })
    }

    // img1.addEventListener("click",function(){
    //     let imgReplace = img1.src
    //     mainimg.src = imgReplace
    //     // console.log("tyuiuu");
    // })

    // img2.addEventListener("click",function(){
    //     let imgReplace = img2.src
    //     mainimg.src = imgReplace
    //     // console.log("tyuiuu");
    // })

    // img3.addEventListener("click",function(){
    //     let imgReplace = img3.src
    //     mainimg.src = imgReplace
    //     // console.log("tyuiuu");
    // })

    // img4.addEventListener("click",function(){
    //     let imgReplace = img4.src
    //     mainimg.src = imgReplace
    //     // console.log("tyuiuu");
    // })