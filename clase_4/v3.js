function callBack(param1, param2) {
    console.log(new Date().toLocaleTimeString());
    console.log("this is param1: " + param1);
    console.log("this is param2: " + param2);
}

function prueba() {
    console.log(new Date().toLocaleTimeString());
    
    setTimeout(() => {
        console.log(new Date().toLocaleTimeString() + "soy el primer setTimeout");
    }, 4000);
    setTimeout(callBack, 2000, "1_param", "2_param");
}
prueba();

//--------------------------FUNCION CALLBACK---------------------------------

// Una función de callback es una función que se pasa a otra función como un argumento,
// que luego se invoca dentro de la función externa para completar algún tipo de rutina o acción.

function saludar(nombre) {
    alert('Hola ' + nombre);  
}
  
function procesarEntradaUsuario(callback) {
    var nombre = prompt('Por favor ingresa tu nombre.');
    callback(nombre);
}
  
//procesarEntradaUsuario(saludar);
  
// le paso la funcion "saludar" como una "variable", osea sin el (), ya que si le meto eso
// directamente ejecutaria la funcion. cuando se llega a "procesarEntradaUsuario" ahi si disparas la funcion con el () 
// por mas que ahi no diga saludar() sino callback(nombre)
  
// El ejemplo anterior es una callback sincrónica, ya que se ejecuta inmediatamente.
// Sin embargo, tenga en cuenta que las callbacks a menudo se utilizan para continuar
// con la ejecución del código después de que se haya completado una operación a sincrónica  
// — estas se denominan devoluciones de llamada asincrónicas. Por ejemplo, nuestro sencillo 
// ejemplo de maps-example.html (ver en vivo) utiliza la API de Google Maps y la API de 
// geolocalización para mostrar un mapa de la ubicación actual de su dispositivo.
// Como obtener las coordenadas del dispositivo de su GPS es asíncrono (no sabemos exactamente 
// cuándo se devolverán los datos), el método Geolocation.getCurrentPosition() toma una 
// función de devolución de llamada anónima como parámetro, que a su vez toma los datos 
// de coordenadas devueltos como un parámetro. Esta función solo se ejecuta cuando se 
// devuelven los datos de coordenadas.