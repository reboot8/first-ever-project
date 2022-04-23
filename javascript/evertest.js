const slideText = [

    {
        trans: "translateX(0px)",
        clas : "fst-child",
        h3 : "WORK ANYWHERE",
        p : "Keep important info handy-your notes sync automatically to all your devices."
    },
    {
        trans: "translateX(-110%)",
        clas : "snd-child",
        h3 : "REMEMBER EVERYTHING",
        p : "Make notes more useful by adding text, images, audio, scans, PDFs, and documents."
    },
    {
        trans: "translateX(-220%)",
        clas : "trd-child",
        h3 : "TURN TO-DO INTO DONE",
        p : "Bring your notes, tasks, and schedule together to get things done more easily."
    },
    {
        trans: "translateX(-330%)",
        clas : "frt-child",
        h3 : "FIND THINGS FAST",
        p : "Get what you need, when you neeed it with power, flexible search capabilities."
    },
]

const heroBtn = document.getElementsByClassName("hero-btn")
const slide = document.getElementById("slide")
const root = document.getElementById("root")


for (let i = 0; i < slideText.length; i++) {
    const userText = document.createElement("div");
    const userH3 = document.createElement("h3");
    const userP = document.createElement("p");

    root.appendChild(userText);
    userText.appendChild(userH3);
    userText.appendChild(userP);
    
    userH3.innerText = slideText[i].h3;
    userP.innerText = slideText[i].p;

    userText.classList.add(`${(slideText[i].clas)}`)
    userText.classList.add("user-text")

    
}
let counter = 0;
setInterval(()=>{
    
    
    for (let counter = 0; counter < slideText.length; counter++) {
            heroBtn[counter].classList.remove("active")
            
    }
        heroBtn[counter].classList.add("active")
        
    root.style.transform = slideText[counter++].trans
    if (counter > slideText.length-1 ){
            counter = 0
            
    }
            
            
        
    
       
},3000)






heroBtn[0].onclick= function(){
    slide.style.transform = "translateX(0px)";
    for (let i = 0; i < 4; i++) {
        heroBtn[i].classList.remove("active")
        
    }this.classList.add("active")
}
heroBtn[1].onclick= function(){
    slide.style.transform = "translateX(-110%)";
    for (let i = 0; i < 4; i++) {
        heroBtn[i].classList.remove("active")
        
    }this.classList.add("active")
}
heroBtn[2].onclick= function(){
    slide.style.transform = "translateX(-220%)";
    for (let i = 0; i < 4; i++) {
        heroBtn[i].classList.remove("active")
        
    }this.classList.add("active")
}
heroBtn[3].onclick= function(){
    slide.style.transform = "translateX(-330%)";
    for (let i = 0; i < 4; i++) {
        heroBtn[i].classList.remove("active")
        
    }this.classList.add("active")
}
