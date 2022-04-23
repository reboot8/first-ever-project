const ham = document.getElementById("hamb");
const list = document.getElementById("lis");
const feat=document.getElementById("features")
const dire=document.getElementById("die")
const whdb=document.getElementById("whole")
const plans=document.getElementById("plans")
const plan=document.getElementById("clickplans")
const fecaret=document.getElementById("fecaret")
const placaret=document.getElementById("placaret")
const mobiFe=document.getElementById("featuresm")
const femobidd=document.getElementById("femobidd")
const plansm=document.getElementById("plansm")
const plmobidd=document.getElementById("plmobidd")

ham.addEventListener("click" , function(){
    list.classList.toggle("showsec1")
    inad1.classList.toggle("inadc1")
    inad2.classList.toggle("inadc2")
    inad3.classList.toggle("inadc3")
})

feat.addEventListener("click" , function(){
    //die.classList.toggle("directnew")
    plans.classList.toggle("plansddnewa")
    whole.classList.toggle("wholeddnew")
    
})

plan.addEventListener("click" , function(){
    whole.classList.toggle("wholeddnewa")
    plans.classList.toggle("plansddnew")
})
mobiFe.addEventListener("click" ,function(){
    femobidd.classList.toggle("femobinew")

})
plansm.addEventListener("click" ,function(){
    plmobidd.classList.toggle("plmobinew")

})