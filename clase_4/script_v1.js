function doSomething() {
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    console.log("this is the start " + time); //2

    /*setTimeOut() añade un mensaje al queue después del tiempo especificado
      como parámetro. Si no existe un mensaje previo, se procesará en el momento.
      Caso contrario, tendrá que esperar que los mensajes previos sean completados.
      Por esta razón el Segundo parámetro indica el tiempo mínimo de espera y no es
      una garantía de que esto se cumpla*/
    setTimeout(function callBack1() {
      var today = new Date();
      var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

      console.log("this is a msg from call back 1 "+ time);  //6
    }, 1000)//ese 0 indica el retardo en milisegundos en que se va a ejecutar callBack1

    setTimeout(function callBack2() {
      var today = new Date();
      var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

      console.log("this is a msg from call back 2 "+ time);  //5
    }, 0)//ese 0 indica el retardo en milisegundos en que se va a ejecutar callBack2

    function hola(){
      console.log("esto es hola");  //3
    }

    hola();

    console.log("this is the end"); //4
  }
  //console.log("hola");  //1
  //doSomething();

  function doSomething2() {
    console.log("start");

    setTimeout(function callBack3() {
      console.log("callBack3");
    });

    console.log("medio");

    setTimeout(function callBack4() {
      console.log("callBack4");
    },0);

    console.log("end");
  }

  //doSomething2();
  /*start
  medio
  end
  callBack3
  callBack4
  */

  /*function myFunctionA(a){
    var b = 2;
    console.log("esto es A: " + a*b);
    return myFunctionB(a * b);
  }

  function myFunctionB(x){
    var y = 10;
    console.log("esto es B "+ (x+y+20));
    return x + y + 20 ;
  }

  console.log(myFunctionA(20));*/


//----------------------------------------------
  var timeOutId;

  function mySetTimeOutFunction() {
    timeOutId = setTimeout(alertTimeout, 3000); //despues de 3 segundos va a llamar a la funcion alertTimeOut
  }

  function alertTimeout() {
    alert("soy el alertTimeOut");
  }

  function myStopTimeOutFunction() {
    clearTimeout(timeOutId);// con esto "cancelo" el setTimeOut con lo cual si todabia no se ejecuto, no lo va a hacer
  }

  //mySetTimeOutFunction();
  //myStopTimeOutFunction(); //no se va a mostrar nada, por q no le doy tiempo

  //setTimeout se ejecuta una sola vez

//----------------------------------------------
  var intervalId;

  var Time = function (date) {
      this.date = date;
      this.getTime = function () {
          return this.date.getHours() + ":" + this.date.getMinutes() + ":" + this.date.getSeconds();
      }
  }

  function mySetIntervalFunction(){
    intervalId = setInterval(alertInterval, 3000);
  }

  function alertInterval(){
    var time = new Time(new Date());
    console.log("soy el alert del interval" + time.getTime());
  }

  function myStopIntervalFunction() {
    clearInterval(intervalId);
  }

  //mySetIntervalFunction();
  //myStopIntervalFunction();
  //setTimeout(myStopIntervalFunction,7000);// va a ejecutar dos veces el alertInterval y se va a detener, tambien se cierra al cerra la ventana
  //ACA MANDO EL myStopIntervalFunction sin el "()" POR QUE ES COMO SI LO MANDARAS COMO UNA """"VARIABLE"""" SIN EJECUTAR
  //SI LE METES EL "()" SE EJECUTA DIRECTAMENTE, ES COMO QUE LA ESTAS MANDANDO SIN EJECUTAR
  //sino esto pasaria...

  function alertIntervalV2(){
    var time = new Time(new Date());
    console.log("soy el alert del interval " + time.getTime());
  }

  function mySetIntervalFunctionV2(){
    intervalId = setInterval(alertIntervalV2(), 3000);// el () del alertInterval hace que se ejecute en ese instante, cancelando el 3000
  }

  //mySetIntervalFunctionV2();
  //setTimeout(myStopIntervalFunction,7000);
