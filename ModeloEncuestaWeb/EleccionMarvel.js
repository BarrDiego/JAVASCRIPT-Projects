function ObtenerParametroURL(variableEntrada) {
    let parametroURL = window.location.search.substring(1);
    let variables = parametroURL.split("&");
    //practicajs3.html?Superman=on&votoDC=Aceptar
    //alert(variables)
    
    for (var i=0; i < variables.length; i++) {
        let heroe=variables[i].split("=")
        //var pair = vars[i].split("=");
        //alert(heroe[0]) // superman separado de votoDC
        if(heroe[1] == variableEntrada) {
            switch(heroe[1]){
                case "SpiderMan":
                    let spiderman=document.querySelector("#Spiderman");
                    spiderman.style.display="";
                    break
                case "IronMan":
                    let ironman=document.querySelector("#Ironman");
                    ironman.style.display="";
                    break
                case "CaptainAmerica":
                    let captain=document.querySelector("#CaptainAmerica")
                    captain.style.display=""
                    break
                case "Thor":
                    let thor=document.querySelector("#Thor")
                    thor.style.display=""
                    break
                case "Hulk":
                    let hulk=document.querySelector("#Hulk")
                    hulk.style.display=""
                    break
                case "Deadpool":
                    let deadpool=document.querySelector("#Deadpool")
                    deadpool.style.display=""
                    break 
            }                 
        }
    }
}
    
 
let docSup=document.addEventListener("DOMContentLoaded",ObtenerParametroURL("SpiderMan"))
let docBat=document.addEventListener("DOMContentLoaded",ObtenerParametroURL("IronMan"))
let docWon=document.addEventListener("DOMContentLoaded",ObtenerParametroURL("CaptainAmerica"))
let docGre=document.addEventListener("DOMContentLoaded",ObtenerParametroURL("Thor"))
let docFla=document.addEventListener("DOMContentLoaded",ObtenerParametroURL("Hulk"))
let docAqu=document.addEventListener("DOMContentLoaded",ObtenerParametroURL("Deadpool"))


let inicio=document.querySelector("#inicio")
let registro=document.querySelector("#registro")
let eleccion=document.querySelector("#eleccion")


function opRegistro(){
    registro.addEventListener("click",(e)=>{
        window.location.href="./registroDM.html"
        console.log("se envio a registro")
    })
}

function opInicio(){
    inicio.addEventListener("click",(e)=>{
        window.location.href="./encuestaDM.html"
        console.log("volvio a empezar")
    })

}


let mostrarTabla= new Promise((e)=>{
    
    let aparecer= setTimeout(()=>{
        eleccion.style.display=""
    },2000)

})

mostrarTabla.then(opRegistro()).catch(opInicio())