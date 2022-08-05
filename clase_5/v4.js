// --------- PROMISE ALL ---------
// todas se tienen que resolver

function promiseAllFunction () {
    console.log('this is the start');
    var p1 = Promise.resolve(3);
    // var p1 = Promise.reject('promise 1 rejected');
    var p2 = 42;
    var p3 = new Promise(function(resolve, reject) {
      setTimeout(resolve, 2000, 'this is promise 3');//aca resolve funciona como una callback que toma el parametro "this si promise 3" (mejor explicado en clase_4 v3.js)
    });

    console.log('this is one message');
    var p = Promise.all([p1, p2, p3])
      .then(response => {
        console.log(response);
        console.log("jamonsio del medio");
      })
      .catch(reason => {
        console.log(reason);
        console.log("not today");
      });

    console.log('this is another message');
    console.log(p);

    setTimeout(function() {
      console.log('the stack is now empty');
      console.log(p);
    });
    console.log('this is the end');
}

// promiseAllFunction();

// --------- PROMISE RACE ---------
// con que halla solo una rejected, toda la promise se toma como rejected
// si todas son resolve, te da la primera en ser resuelta

function promiseRaceFunction () {
    console.log('this is the start');
    var p1 = new Promise( (resolve)=> {
        setTimeout(resolve, 3000, "p1");
    });
    // var p1 = Promise.reject('promise 1 rejected');
    var p2 = 42;
    var p3 = new Promise(function(resolve, reject) {
      setTimeout(resolve, 2000, 'this is promise 3');
    });

    console.log('this is one message');
    var p = Promise.race([p1, p2, p3])
      .then(response => {
        console.log("and the winer is: " + response);
      })
      .catch(reason => {
        console.log(reason);
        console.log("not today");
      });

    console.log('this is another message');
    console.log(p);

    setTimeout(function() {
      console.log('the stack is now empty');
      console.log(p);
    });
    console.log('this is the end');
}

// promiseRaceFunction();

// --------- PROMISE ALLSETTLED ---------
// una vez que todas las promises se completen, ya sea como resolve, o como reject,
// te va a mostrar un array con su status (pending/fulfilled) y su value: "lo q cargaste en resolve o reject";
function promiseAllSettledFunction () {
    console.log('this is the start');
    // var p1 = Promise.resolve("soy p1");
    var p1 = Promise.reject('promise 1 rejected');
    var p2 = 42;
    var p3 = new Promise(function(resolve, reject) {
      setTimeout(resolve, 2000, 'this is promise 3');
    });

    console.log('this is one message');
    var p = Promise.allSettled([p1, p2, p3])
      .then(response => {
        console.log(response);
        console.log("jamonsio del medio");
      })
      .catch(reason => {
        console.log(reason);
        console.log("not today");
      });

    console.log('this is another message');
    console.log(p);

    setTimeout(function() {
      console.log('the stack is now empty');
      console.log(p);
    });
    console.log('this is the end');

// 0: {status: 'rejected', reason: 'promise 1 rejected'}
// 1: {status: 'fulfilled', value: 42}
// 2: {status: 'fulfilled', value: 'this is promise 3'}
// pero sigue siendo parte del .then(), osea que se "resolvio bien"
}
promiseAllSettledFunction();