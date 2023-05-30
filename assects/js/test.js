// // let number =[2,2,4,5,6,6,4,3,2,1,1]
// // function getNotreapatnumber(array) {
// //     let result =[]
// //     for(var i=0 ;i<array.length;i++){
// //         if(!result.includes(array[i])){
// //             result.push(array[i])
// //         }
// //     }
// //     return result
// // }
// // console.log(getNotreapatnumber(number) );

// let links=document.getElementsByTagName("a")
// let test =document.getElementsByTagName("li")
// // console.log(test,links);
//     for( let i = 0; i < links.length ; i++ ){
//         test[i].textContent = links[i].textContent
//         // // test[i].style.color="red"
//         // test[i].style.cssText=`
//         // color:red;
//         // backgroundColor: green;
//         // margin:20px;
//         if(test[i]%=0){
//             links[i].style.cssText=`
//             color:red;
//          backgroundColor: black;
//          margin:20px;
//             `
//         }
        
        // `
        
    // }
    // test[0].parentElement.style.backgroundColor="black"

// test.textContent=links.textContant
// console.log(test);

// let basicolor=[0,3,2,5,7,8,9,1,4,6,"a","B","C","D","F"]

// let btn=document.getElementById("btn")

// btn.addEventListener("click",function(){

//     document.body.style.backgroundColor= getColor()

// })

// function getColor(){
//     let newcolor=""
//     for(var i=0;i<6 ;i++){
//         newcolor+=basicolor[parseInt(Math.random()*basicolor.length)]
//     }  
//     return "#"+newcolor
// }
// let paltcolor=document.querySelectorAll("palt")

// paltcolor.addEventListener("click",function(){
//    document.body.style.backgroundColor= getColor()
        
//     }
// })

// let contant =document.getElementById("contant")
// let Xhttp =new XMLHttpRequest ()
// Xhttp.onload =function(){

//     let data =JSON.parse(Xhttp.responseText)
//     console.log(data);
//     let users =data.map(function(item,index){
//         return `<tr>
//         <td>${++index}</td>
//         <td>${item.id}</td>
//         <td>${item.name}</td>
//         <td>${item.email}</td>
//         <td>${item.phone}</td>
        
//         </tr>`

//     })
//     userbody.innerHTML =users.join("")
// }
// Xhttp.open("GET","https://jsonplaceholder.typicode.com/users")
// Xhttp.send();
// let cont =document.querySelector("#contaner")
// console.log(cont);
// let xhttp = new XMLHttpRequest()
// xhttp.onload=function(){
//     let test =JSON.parse(xhttp.responseText).results[0]
//     console.log(test)
//     cont.innerHTML+=`
//     <h1>${test.name.first}</h1>
//     <img src="${test.picture.large}">
    
//     `

// }
// xhttp.open("GET","https://randomuser.me/api/")
// xhttp.send()

// let http =new XMLHttpRequest()
// let texurl="https://newsapi.org/v2/everything?q=tesla&from=2023-04-17&sortBy=publishedAt&apiKey=4c48b106ce1449c7914a50c84df2608a"
// http.onload=function(){
//     let data=JSON.parse(http.responseText)
//    console.log(data);
//     // cont.innerHTML =users.join("")
// }
// http.open("GET",texurl)
// http.send()

// let input =document.querySelector("input[type='text']")
// let from =document.querySelector("form")
// from.addEventListener("submit",function (){
//     // e.prevntDefault()
//     // document.querySelector("h3").textContent=input.value
//     console.log("gdff");
    
//  })


// function viewinconsol(){
//     console.log("new name here");
// }
// function getname(callback){
//     callback()
// }
// getname(function(){
//     console.log("callback funcation");
// })
// let cont=document.getElementById("userbody")

// data
// .then((res)=>{
//     return res.json()
// })
// .then((res)=>{
    
//     res.foreach()
//         //   console.log(res);
//         //     cont.innerHTML =res.join("")
        
// })
// async function gerposts(){
//     let response= await fetch("https://jsonplaceholder.typicode.com/posts")
//     let data =  await response.json()
//     let newdata =data.map(function({titel}){
//         return `<h1>${titel}</h1>`
//     })
//     document.write(newdata.join(""))
// }
// gerposts()

let catogrycontainer =document.getElementById("userbody")
let page=i
async function gerposts(){
let response= await fetch("https://api.eraasoft.com/api/categories?page"+page)
let result =await response.json()
console.log(result);
randerElements(result.data)
}
gerposts()
function randerElements(data) {
    let renderdara =data.map(function({id,name}){
        return`
        <tr>
        <td>${id}</td>
        <td>id</td>
        <td>name</td>
      </tr>
        `
    })
   
}