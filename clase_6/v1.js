// -------- ASYNC CALL --------
function myAsyncCall() {

    function resolveAfter2Seconds() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve("resolved");
          console.log("promise is done");
        }, 2000);
      });
    }

    async function asyncCall() {
      console.log("calling");
      var result = await resolveAfter2Seconds(); //va a quedar esperando a q resolveAfter2Seconds se resuelva
      console.log(result);
    }

    asyncCall();
    console.log("papa");

// output:
// calling
// papa
// promise is done
// resolved

// osea que por mas que estoy "esperando" en resolveAfter2Seconds, el programa sigui su ejecucion,
// por que llego a "papa" antes que a "promise is donde"
}

// myAsyncCall();


// -------- Async - Secuencial --------
//
// • En este ejemplo se realiza una operación secuencial
// • secuentialStart() se ejecuta y se suspende 2 segundos a causa del primer 
// await, luego se suspende 1 segundo a causa del segundo await
// • El segundo timer no se crea hasta que el primero haya sido disparado
// • El código finaliza luego de 3 segundos

function myAsyncSecuencialFunction() {

    var resolveAfter2Seconds = function () {
        console.log("starting slow promise");

        return new Promise((resolve) => {
        setTimeout(function () {
            resolve("slow");
            console.log("slow promise is done");
        }, 2000);
        });
    };

    var resolveAfter1Second = function () {
        console.log("starting fast promise");
        return new Promise((resolve) => {
        setTimeout(function () {
            resolve("fast");
            console.log("fast promise is done");
        }, 1000);
        });
    };

    var sequentialStart = async function () {
        console.log("==SEQUENTIAL START==");
        // 1. execution gets here almost instantly
        // const slow = resolveAfter2Seconds();
        const slow = await resolveAfter2Seconds(); // 2. this runs 2 secons after 1.
        console.log(slow);

        // const fast = resolveAfter1Second();
        const fast = await resolveAfter1Second();
        console.log(fast); // 3. this runs 3 seconds after 1.
    };

    sequentialStart();
    //after 2 secons, logs "slow", then after 1 more second, "fast"
    //SI NO TUVIERA EL AWAIT SE EJECUTARIAN ALL MISMO TIEMPO, Y VERIAS PRIMERO EL RESULTADO DE resolveAfter1Second
}

// myAsyncSecuencialFunction();

//lo mismo de manera concurrente
function myAsyncConcurrentFunction() {
    var resolveAfter2Seconds = function () {
        console.log("starting slow promise");

        return new Promise((resolve) => {
        setTimeout(function () {
            resolve("slow");
            console.log("slow promise is done");
        }, 2000);
        });
    };

    var resolveAfter1Second = function () {
        console.log("starting fast promise");

        return new Promise((resolve) => {
        setTimeout(function () {
            resolve("fast");
            console.log("fast promise is done");
        }, 1000);
        });
    };

    var concurrentStart = async function () {
        console.log("==CONCURRENT START with await==");
        const slow = resolveAfter2Seconds(); //se llaman "al mismo tiempo", pero al ser este mas lento, el 1second termina antes
        const fast = resolveAfter1Second();

        console.log(await slow); //sin embargo por la forma en que lo muestro, va a esperar a que 2seconds este terminado, y recien ahi mostrara el 1second
        console.log(await fast);
    };

    concurrentStart();
// segundo 0
// ==CONCURRENT START with await==
// starting slow promise   ahora empiezan al mismo tiempo
// starting fast promise
// segundo 1
// fast promise is done   
// segundo 2 
// slow promise is done
// slow (muestra primero slow por que pusiste primero su console.log)
// fast
// en el caso de ejecutarlo secuencialmente (primer caso) la funcion tarda 
// 3 segundos en terminar:
// primero ejecuta totalmente el resolveAfter2Seconds (primeros 2 segundos)
// y despues gasta otro segundo en resolveAfter1Second
//
// en cambio aca ambas funciones comienzan al mismo tiempo y after1second termina antes
// pero como tenes el await en el console.log va a mostrarlo una vez termine slow (por que lo pusiste arriba, simplemente) 
}
    
// myAsyncConcurrentFunction();

// lo de abajo es lo mismo pero con promise

function asyncParalelWithAwaitPromiseAll() {
    var paralel = async function () {
        console.log("==PARALEL with await promise.all==");

        var resolveAfter2Seconds = function () {
        console.log("starting slow promise");

        return new Promise((resolve) => {
            setTimeout(function () {
            resolve("slow");
            console.log("slow promise is done");
            }, 2000);
        });
        };

        var resolveAfter1Second = function () {
            console.log("starting fast promise");

            return new Promise((resolve) => {
                setTimeout(function () {
                resolve("fast");
                console.log("fast promise is done");
                }, 1000);
            });
        };

        await Promise.all([
        (async () => console.log(await resolveAfter2Seconds()))(),
        (async () => console.log(await resolveAfter1Second()))(),
        ]); //si no se usase el await, cualquier error que pueda ocurrir dentro de esas promisess, no se propagaria hacia arriba
    };

    var paralelPromise = function () {
        console.log("==PARALEL with promise.then==");
        resolveAfter2Seconds().then((message) => console.log(message));
        resolveAfter1Second().then((message) => console.log(message));
    };

    paralel();
    //truly parallel: after 1 second, logs "fast, then after 1 more second, "slow"

    //wait aboce to finish
    //setTimeout(paralelPromise,13000);
    //same

// ==PARALEL with await promise.all==
// starting slow promise
// starting fast promise
// fast promise is done
// fast
// slow promise is done
// slow
}

// asyncParalelWithAwaitPromiseAll();

// https://youtu.be/rJeBtHiB-SY?list=PL5zQBNVD_BMs51U7dXh4XtLXZwYiIh8Hd&t=727 MIRAR

function concurrentPromiseAll2() {
    var resolveAfter2Seconds = function () {
        console.log("starting slow promise");

        return new Promise((resolve) => {
        setTimeout(function () {
            resolve("slow");
            console.log("slow promise is done");
        }, 2000);
        });
    };

    var resolveAfter1Second = function () {
        console.log("starting fast promise");

        return new Promise((resolve) => {
        setTimeout(function () {
            resolve("fast");
            console.log("fast promise is done");
        }, 1000);
        });
    };

    var concurrentPromise = function() {
        console.log('==CONCURRENT START with Promise.all==');
        return Promise.all([resolveAfter2Seconds(), resolveAfter1Second()])
            .then((messages) => {
                messages.forEach((msg) => {
                    console.log(msg);
                })
            })
    }// es un poco mas complejo hacer el error handling con promises
    concurrentPromise();
}
// concurrentPromiseAll2();

function paralelPromiseAll() {
    var resolveAfter2Seconds = function () {
        console.log("starting slow promise");

        return new Promise((resolve) => {
        setTimeout(function () {
            resolve("slow");
            console.log("slow promise is done");
        }, 2000);
        });
    };

    var resolveAfter1Second = function () {
        console.log("starting fast promise");

        return new Promise((resolve) => {
        setTimeout(function () {
            resolve("fast");
            console.log("fast promise is done");
        }, 1000);
        });
    };

    var paralel = async function () {
        console.log("==PARALEL with await promise.all==");

        await Promise.all([
        (async () => console.log(await resolveAfter2Seconds()))(),
        (async () => console.log(await resolveAfter1Second()))(),
        ]); //si no se usase el await, cualquier error que pueda ocurrir dentro de esas promisess, no se propagaria hacia arriba
    };

    var paralelPromise = function () {
        console.log("==PARALEL with promise.then==");
        resolveAfter2Seconds().then((message) => console.log(message));
        resolveAfter1Second().then((message) => console.log(message));
    };
// https://youtu.be/rJeBtHiB-SY?list=PL5zQBNVD_BMs51U7dXh4XtLXZwYiIh8Hd&t=1140 ACA HABLA DE EL ERROR
    paralel();
}

paralelPromiseAll();