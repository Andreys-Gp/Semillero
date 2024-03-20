/* const { string } = require("mathjs");
 */
// GLOBAL CONTEXT
let tipe1=false;
/* let tipe2=false;
let tipe3=false;
let entrada1=document.getElementById("primaria").value;
let entrada2=document.getElementById("segunda").value;
let entrada3=document.getElementById("tercera").value;

document.addEventListener("DOMContentLoaded", function(){
    let inputVecto=document.getElementById("vector");
    inputVecto.addEventListener("change",capturarVector);
    function capturarVector(){

        let tipoCampo=inputVecto.value;
        tipoCampo=tipoCampo.toLowerCase();
        if(tipoCampo === "cartesiana"){
            tipe1=true;
        }
        if(tipoCampo === "polar"){
            tipe2=true;
        }
        if(tipoCampo === "cilindrica"){
            tipe3=true;
        }
        else{
            document.getElementById("vectorerr").style.display="inline";
        }
    }
    
    
    
})
 */



form.addEventListener("submit", e => {
    let entrada1=document.getElementById("primaria").value;
    let entrada2=document.getElementById("segunda").value;
    let entrada3=document.getElementById("tercera").value;
    let elementoResultado=document.getElementById("resultado")
        e.preventDefault();
        let regex=/^[pPrR@&]+$/;
    
    
        if((regex).test(entrada1)){
            document.getElementById("error2").style.display="inline";
        }
        if((regex).test(entrada2)){
            document.getElementById("error3").style.display="inline";
        }
        if((regex).test(entrada3)){
            document.getElementById("error4").style.display="inline";
        }
        if(!(regex).test(entrada1) && !(regex).test(entrada2) && !(regex).test(entrada3)){
                    let cadena1=String(entrada1);
                    let cadena2=String(entrada2);
                    let cadena3=String(entrada3);
    
                    let funcion1=math.parse(cadena1);
                    let funcion2=math.parse(cadena2);
                    let funcion3=math.parse(cadena3);
    
                    let derivada1=math.derivative(funcion1,"x").toString();
                    console.log(derivada1)
                    let derivada2=math.derivative(funcion2,"y").toString();
                    console.log(derivada2)
                    let derivada3=math.derivative(funcion3,"z").toString();
                    console.log(derivada3)
    
                let textoREsul="<h2>Divergencia</h2>";
                textoREsul += `(Ax): ${derivada1}<br>`;
                textoREsul += `(Ay): ${derivada2}<br>`;
                textoREsul += `(Az): ${derivada3}<br>`;
    
                elementoResultado.innerHTML=textoREsul;
                
    
        }
     })

/* if(tipe1===true){
    tipe2=false;
    tipe3=false;
    
        document.getElementById("error2").style.display="none";
        document.getElementById("error3").style.display="none";
        document.getElementById("error4").style.display="none";
        
        
                let cadena1=String(entrada1);
                let cadena2=String(entrada2);
                let cadena3=String(entrada3);

                let funcion1=math.parse(cadena1);
                let funcion2=math.parse(cadena2);
                let funcion3=math.parse(cadena3);
                console.log(funcion1);
                console.log(funcion2);
                console.log

                let derivada1=math.derivative(funcion1,"x").toString();
                console.log(derivada1)
                let derivada2=math.derivative(funcion2,"y").toString();
                console.log(derivada2)
                let derivada3=math.derivative(funcion3,"z").toString();
                console.log(derivada3)

            let textoREsul="<h2>Divergencia</h2>";
            textoREsul += `(A1): ${derivada1}<br>`;
            textoREsul += `(A2): ${derivada2}<br>`;
            textoREsul += `(A3): ${derivada3}<br>`;

            elementoResultado.innerHTML=textoREsul;
            

    
} */
    
    
    

    /* if(tipe2===true){

        tipe1=false;
        tipe3=false;
            document.getElementById("error2").style.display="none";
            document.getElementById("error3").style.display="none";
            document.getElementById("error4").style.display="none";
            
            

                    let cadena1=String(entrada1);
                    let cadena2=String(entrada2);
                    let cadena3=String(entrada3);

                

                    console.log(cadena1);
                    console.log(cadena2);

                    let funcion1=math.parse(cadena1);
                    let funcion2=math.parse(cadena2);
                    let funcion3=math.parse(cadena3);
    
                    let derivada1=math.derivative(funcion1,"x").toString();
                    console.log(typeof funcion1)
                   
                    let derivada2=math.derivative(funcion2,"y").toString();
               
                    let derivada3=math.derivative(funcion3,"z").toString();
                    
    
                let textoREsul="<h2>Divergencia</h2>";
                textoREsul += `(Ax): ${derivada1}<br>`;
                textoREsul += `(Ay): ${derivada2}<br>`;
                textoREsul += `(Az): ${derivada3}<br>`;
    
                elementoResultado.innerHTML=textoREsul;
        
    
    }
 */


    
    
    
 


