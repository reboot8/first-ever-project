let columnOnePackages = document.getElementById("column-one-packages")
let columnTwoPackages = document.getElementById("column-two-packages")
let columnThreePackages = document.getElementById("column-three-packages")
let caretUpOne = document.getElementById("caret-up-one")
let caretDownTwo = document.getElementById("caret-down-two")
let caretDownThree = document.getElementById("caret-down-three")
let hoverCircle = document.getElementById("fa-circle")
let hoverText = document.getElementById("hover-text")

caretUpOne.addEventListener("click",function(){
    
    columnOnePackages.classList.toggle("d-none")
    
 
    if(caretUpOne.className== "fa-solid fa-2x fa-caret-up") {
        caretUpOne.className = "fa-solid fa-2x fa-caret-down" 
    } else if( caretUpOne.className == "fa-solid fa-2x fa-caret-down"){
        caretUpOne.className = "fa-solid fa-2x fa-caret-up"
    }
    
})


caretDownTwo.addEventListener("click",function(a){
    
    columnTwoPackages.classList.toggle("di-none")

    if(caretDownTwo.className== "fa-solid fa-2x fa-caret-up") {
        caretDownTwo.className = "fa-solid fa-2x fa-caret-down" 
    } else if( caretDownTwo.className == "fa-solid fa-2x fa-caret-down"){
        caretDownTwo.className = "fa-solid fa-2x fa-caret-up"
    }
    
})


caretDownThree.addEventListener("click",function(){
    
    columnThreePackages.classList.toggle("dis-none")

    console.log(columnThreePackages.classList)


    if(caretDownThree.className== "fa-solid fa-2x fa-caret-up") {
        caretDownThree.className = "fa-solid fa-2x fa-caret-down" 
    } else if( caretDownThree.className == "fa-solid fa-2x fa-caret-down"){
        caretDownThree.className = "fa-solid fa-2x fa-caret-up"
    }
    
})

hoverCircle.addEventListener("mouseover",function(){
   hoverText.classList.toggle("d-none")
   console.log(hoverText.classList)
})
hoverCircle.addEventListener("mouseout", function(){
    hoverText.classList.toggle("d-none")
})



