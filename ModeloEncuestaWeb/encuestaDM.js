let dc=document.querySelector("#dc")
let marvel=document.querySelector("#marvel")
let choice=document.querySelector("#choice")
let body=document.querySelector("body")
let header=document.querySelector("header")
let main=document.querySelector("main")


dc.addEventListener("click",(e)=>{
    let heroesDC=document.querySelector("#heroesDC")
    let tablaDC=document.querySelector("#tablaDC")
    let elegirDC=document.querySelector("#elegirDC") 
    choice.style.display="none"
    header.style.display="none"
    main.style.background="none"
    body.style.backgroundImage="url(https://vignette.wikia.nocookie.net/dcextendeduniverse/images/3/3e/DC_Comics_-_Logo_MoS_y_BvS.png/revision/latest/top-crop/width/300/height/300?cb=20170722035746&path-prefix=es)"
    document.documentElement.scrollTop=0
    heroesDC.style.display=""
    tablaDC.style.display=""
    elegirDC.style.display=""
    
    elegirDC.addEventListener("onsubmit",(e)=>{
        console.log("envio el formulario",e)

    })
    
    console.log("hizo click en dc",e)
})

marvel.addEventListener("click",(e)=>{
    let heroesMarvel=document.querySelector("#heroesMarv")
    let tablaMarv=document.querySelector("#tablaMarv")
    let elegirMarv=document.querySelector("#elegirMarv")
    choice.style.display="none"
    header.style.display="none"
    main.style.background="none"
    body.style.backgroundImage="url(https://super-ficcion.com/wp-content/uploads/2019/12/marvel-character-logo.jpg)"
    document.documentElement.scrollTop=0
    heroesMarvel.style.display=""
    tablaMarv.style.display=""
    elegirMarv.style.display=""
    elegirMarv.addEventListener("onsubmit",(e)=>{
        console.log("se envio el formulario",e)
    })
    console.log("hizo click en marvel",e)
})
