

form.addEventListener("submit", e => {
    let entrada1=document.getElementById("primaria").value;
    let entrada2=document.getElementById("segunda").value;
    let entrada3=document.getElementById("tercera").value;
    let elementoResultado=document.getElementById("resultado")
        e.preventDefault();
       

        
            document.getElementById("error2").style.display="none";
            document.getElementById("error3").style.display="none";
            document.getElementById("error4").style.display="none";
            
            
                        function refactorirString(input,cadena){
                            return  input + cadena;
                        }

                       
                    let cadena1=refactorirString(entrada1,"*(x)");
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
                        
                      derivada1=refactorirString(derivada1,"*(1/x)");
                      derivada2=refactorirString(derivada2,"*(1/x)");
                
        
                    let textoREsul="<h2>Divergencia</h2>";
                    textoREsul += `(A1): ${derivada1}<br>`;
                    textoREsul += `(A2): ${derivada2}<br>`;
                    textoREsul += `(A3): ${derivada3}<br>`;
        
                    elementoResultado.innerHTML=textoREsul;
        
    
                 
     })


    
    

   