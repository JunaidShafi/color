// const btn2= document.querySelector("#v2")
// btn2.onclick = hello;
// const h2 = document.querySelector("h2")


// function hello(){
//     let i =0;
//     i++
//     h2.innerText = `You clicked me ${i}time `

// }
const body= document.querySelector("body")
const col = document.querySelector("#col");
col.addEventListener("click",change)




function change(){
   let x= Math.floor(Math.random() *255 +1);
    let y= Math.floor(Math.random() *255 +1);
   let  z= Math.floor(Math.random() *255 +1);
    body.style.backgroundColor=`rgb(${x},${y},${z})`
}