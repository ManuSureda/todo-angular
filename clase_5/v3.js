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

// -------PROMISE ALL-------
function promiseAll() {
    console.log('this is the start');//1
    var p1 = Promise.resolve(3);
    //var p1 = Promise.reject('promise 1 rejected'); // con que una sola sea reject, todo el promiseAll se concidera reject
    var p2 = 42;
    var p3 = new Promise(function(resolve, reject) {
      setTimeout(resolve, 8000, 'this is promise 3');
    });

    console.log('this is one message');//2
    var p = Promise.all([p1, p2, p3])
      .then(response => {
        console.log(response);//8
        console.log("jamonsio del medio");//9
      })
      .catch(reason => {
        console.log(reason);
        console.log("not today");
      });

    console.log('this is another message');//3
    console.log(p);//4 Promise {<pending>}

    setTimeout(function() {
      console.log('the stack is now empty');//6
      console.log(p);//7 Promise {<pending>}
    });
    console.log('this is the end');//5    
}

// promiseAll();

// ------- PROMISE RACE -------

function promiseRace() {
    var p1 = new Promise( (resolve, reject) => {
        setTimeout(resolve, 5000, "uno");
    });
    var p2 = new Promise( (resolve, reject) => {
        setTimeout(resolve, 2000, "dos");
    });
 
    Promise.race([p1, p2]).then( value => {
      console.log(value); // "dos"
      // Ambas se resuelven, pero la p2 antes.
    }); 
}

//promiseRace();

// ------- ALL SETTLED -------

function allSettled() {
    const promise1 = Promise.resolve(3);
    const promise2 = new Promise((resolve, reject) => setTimeout(reject, 100, 'foo'));
    const promises = [promise1, promise2];

    Promise.allSettled(promises).
    then((results) => results.forEach((result) => console.log(result.status)));

    // expected output:
    // "fulfilled"
    // "rejected"

    const promise3 = Promise.resolve(3);
    const promise4 = new Promise((resolve, reject) => setTimeout(resolve, 2000, 'foo'));
    const promises2 = [promise3, promise4];
    
    Promise.allSettled(promises2).
    then((results) => results.forEach((result) => console.log(result.status)));

    // expected output: espera dos segundos y...
    // "fulfilled"
    // "fulfilled"
}

// allSettled();

