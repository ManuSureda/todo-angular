class Tiempo{
    constructor(){
        this.date = new Date();
    }

    getTime() {
        return this.date.getHours() + ":" + this.date.getMinutes() + ":" + this.date.getSeconds();
    }
}

function getTimeNow(){
    let t = new Date();

    return t.getHours() + ":" + t.getMinutes() + ":" + t.getSeconds();
}

function logTime(id = 1){
    let t = new Date();

    console.log("this is call: " + id + " : " + t.getHours() + ":" + t.getMinutes() + ":" + t.getSeconds());
}

let id = 0;

function logTime2(){
    let t = new Date();

    console.log("this is call: " + id + " : " + t.getHours() + ":" + t.getMinutes() + ":" + t.getSeconds());
    id++;
}

//v1: ----------------------------
// en este caso le digo que despues de 3 segundos loguee el tiempo,
// pero como el queue esta vacio, se ejecuta de inmediato
//setTimeout(console.log(getTimeNow()),3000);

//v2: ----------------------------
// console.log("hola");
// setTimeout(console.log(getTimeNow()),3000);
// ahora sigue igual, se ejecuta de inmediato, ya que si bien hay un primer mensajes
// (el hola), este se ejecuta de inmediato y el queue queda vacio.

//v3: ----------------------------
//console.log("hola");
function doSomething(){

    console.log("entre en doSomthing()");

    setTimeout(function callBack1() {
        let date = new Date();
        let time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

        console.log("this is call 1: " + time);
    }, 4000);

    setTimeout(function callBack2() {
        let date = new Date();
        let time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

        console.log("this is call 2: " + time);
    }, 2000);

    console.log("soy el final de doSomthing()");
}
//doSomething();

//v4: ----------------------------
// console.log("soy v4");
// setTimeout(logTime(1), 4000);
// setTimeout(logTime(2), 2000);
// como son funciones que estan "anidadas(?" en otro lado se ejecutan de inmediato e ignoran el timeout?

//v5: ----------------------------
function doSomthingV5() {
    console.log("entre en v5");

    setTimeout(logTime, 4000);
    setTimeout(logTime, 2000);

    console.log("final de v5");
}
//doSomthingV5();

// ANOTACION IMPORTANTE ----------
// la razon por la que no me estaba dando vola el setTimeout
// es por que yo le pasaba funciones con el (), lo cual hace que
// se ejecuten de inmediato, si no le paso el () o si la declaro
// en el lugar (como callBack1 y 2) ahi si respeta el timeout

//v6: ----------------------------
function doV6() {
    console.log("entre en v6");

    setTimeout(logTime2,4000);
    setTimeout(logTime2,1000);
    
    console.log("fin de v6");
}
// doV6();

// ahora si.
// log:
// entre en v6
// fin de v6
// this is call: 0 : 15:50:40
// this is call: 1 : 15:50:43

// -------------------------------
// setInterval
// -------------------------------

var intervalId;

function alertInterval() {
    console.log(logTime2());
}// lo hago asi por que si lo pusiese en el setInterval() al poner el ()
// se ejecutaria de manera automatica ignorando el time

function myIntervalFunction(){
    intervalId = setInterval(alertInterval,3000);
}

function myStopIntervalFunction() {
    clearInterval(intervalId);
}

function doInterval() {
    console.log("estoy en interval");

    logTime2();
    setTimeout(myIntervalFunction,0);// comienza, espera 3 segundos y hace un log, espera otros 3 y hace otro log
    setTimeout(myStopIntervalFunction,9000);// cuando va a hacer el 3º justo llega el stop asi q anda bien

    console.log("saliendo");
}

//tambien hay un clearTimeout() !!!!!!!!!!!!!

//doInterval();

