let registro=document.querySelector("#registro")
let aparecer=document.querySelector("#aparecer")
let inicio=document.querySelector("#inicio")


aparecer.addEventListener("click",(e)=>{
    registro.style.display="none"
    let final=document.querySelector("#final")
    final.style.display=""
    
    let inicioF=document.querySelector("#inicioF")
    inicioF.addEventListener("click",(e)=>{
        console.log("voy al inicio")
        window.location.href="./encuestaDM.html"
    })

})

inicio.addEventListener("click",(e)=>{
    window.location.href="./encuestaDM.html"
})