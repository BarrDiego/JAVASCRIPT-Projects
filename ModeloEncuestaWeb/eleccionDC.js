console.log("funciona con el ./???")

/*
function getQueryVariable(variable) {
        // Estoy asumiendo que query es window.location.search.substring(1);
        var query = "product_id=32&cat_id=1&sessionid=123";
        var vars = query.split("&");//separa cada variable en un array [product_id,cat_id,sessionid]
        alert(vars);
        for (var i=0; i < vars.length; i++) { //recorre el arreglo
            var pair = vars[i].split("="); // separa el valor del nombre
            if (pair[0] == variable) {
                return pair[1];
            }
        }
        return false;
    }



*/

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
                case "Superman":
                    let superman=document.querySelector("#Superman");
                    superman.style.display="";
                    break
                case "Batman":
                    let batman=document.querySelector("#Batman");
                    batman.style.display="";
                    break
                case "WonderWoman":
                    let wonder=document.querySelector("#WonderWoman")
                    wonder.style.display=""
                    break
                case "GreenLatern":
                    let green=document.querySelector("#GreenLatern")
                    green.style.display=""
                    break
                case "Flash":
                    let flash=document.querySelector("#Flash")
                    flash.style.display=""
                    break
                case "Aquaman":
                    let aquaman=document.querySelector("#Aquaman")
                    aquaman.style.display=""
                    break        

            }
                
                
            
        }
    }
}
    
 
let docSup=document.addEventListener("DOMContentLoaded",ObtenerParametroURL("Superman"))
let docBat=document.addEventListener("DOMContentLoaded",ObtenerParametroURL("Batman"))
let docWon=document.addEventListener("DOMContentLoaded",ObtenerParametroURL("WonderWoman"))
let docGre=document.addEventListener("DOMContentLoaded",ObtenerParametroURL("GreenLatern"))
let docFla=document.addEventListener("DOMContentLoaded",ObtenerParametroURL("Flash"))
let docAqu=document.addEventListener("DOMContentLoaded",ObtenerParametroURL("Aquaman"))


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



