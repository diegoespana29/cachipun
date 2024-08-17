alert("juegos al cachipun Larry");
let cantidad = prompt("Por favor ingrese las veces que va a jugar:");
let ContadorPuntajePositivo=0;
let ContadorPuntajeNegativo=0;
let empate=0;
if(!/^\d+$/.test(cantidad))
{
    alert("Por favor, ingrese solo números.");
 
}else
{
    for(i=1;i<=cantidad;i++)
    {
      let DatoUsuario= prompt("puedes ingresar 1 piedra, 2 papel, 3 tijera");

      let numeroAleatorio =  Math.floor(3 * Math.random());
      if((DatoUsuario==1 && numeroAleatorio == 2) || (DatoUsuario==2 && numeroAleatorio == 3)||(DatoUsuario==3 && numeroAleatorio == 1))
      {
        alert("Te gane Larry");
        ContadorPuntajeNegativo++;
      }else
      {
        if((DatoUsuario==1 && numeroAleatorio == 3)||(DatoUsuario==2 && numeroAleatorio == 1)||(DatoUsuario==3 && numeroAleatorio == 2))
            {
              alert("Me Ganaste Larry");
              ContadorPuntajePositivo++;
            }else
            {
              if((DatoUsuario==1 && numeroAleatorio == 1)||(DatoUsuario==2 && numeroAleatorio == 2)||(DatoUsuario==3 && numeroAleatorio == 3))
                    {
                      alert("Empate Larry");
                      empate++;
                    }
            
            }
            
      }
    }
    alert("los resultados son: ganaste: "+ContadorPuntajePositivo+" perdiste "+ContadorPuntajeNegativo+"empate"+empate);
    alert("cuando quieras te sigo ganando Larry");
}