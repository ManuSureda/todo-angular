 //-------PROMISES
    /* la comunicacion asyncronica nos permite realizar una llamada o una invocacion
    a una rutina de codigo, una funcion, para la cual no se va a optener el resultado
    de manera inmediata ya que la devolucion de ese resultado que estoy esperando puede
    que sea en diferido, es decir que tarde un determinado tiempo en ser devuelta.
    
    como no se desea quedarse esperando un tiempo indeterminado a que el resultado
    de esa llamada o invocacion retorne, lo que hacemos es, disparar ese llamado y 
    continuar con nuestro flujo de codigo, hasta que en un momento determinado de tiempo
    el resultado de esa ejecucion, va a retornar y voy a utilizarlo.*/


    // console.log("start") 
    //          // el => es lo mismo que poner un function antes del (resolve, reject)
    // var myFirstPromise = new Promise((resolve, reject) => {
    //     setTimeout(function(){
    //       resolve("se resolvio") //estoy forsando que se resuelva
    //       reject("rejected") //estaria forsando que se rejecte
    //     },2500)
    // }) 

    // myFirstPromise
    //   .then((successMessage) => {//no tiene por que ser successMessage, puede ser cualquier palabra
    //     console.log("bien " + successMessage) 
    //   })
    //   .catch((reason) => {
    //   console.log("fuck " + reason) 
    // })//entonces con el then, es en el caso de que sea un resolve, y el catch es un reject

    // va a decir start, va a esperar 2,5 segundos y va a tirar el bien se resolvio

// ----------------------------------

    // const userLeft = false
    // const userWatchingCatMeme = false 

    // function watchTutorialCallback(callback, errorCallback) {
    //   if (userLeft) {
    //     errorCallBack({
    //         name: 'user left',
    //         message: ':('
    //       })
    //   } else if (userWatchingCatMeme) {
    //     errorCallBack({
    //         name: ' user watching cat meme',
    //         message: 'webDevSimplified < cat'
    //       })
    //   } else {
    //     callback('thumbs up and subscribe')
    //   }
    // }

    // watchTutorialCallback((message) => {
    //   console.log('siccess: '+ message)
    // }, (error) => {
    //   console.log(error.name + ' ' + error.message)
    // })

    //------------------------------------------------
    /*function watchTutorialPromise() {
      return new Promise((resolve, reject) => {
        if (userLeft) {
          reject({
            name: 'user left',
            message: ':('
          })
        } else if (userWatchingCatMeme) {
          reject ({
            name: ' user watching cat meme',
            message: 'webDevSimplified < cat'
          })
        } else {
          resolve('thumbs up and subscribe') // resolve no es en si una variable es como una funcion es como un callback por eso lo ""llenas"" de esa forma
        }
      })
    }

    watchTutorialPromise().then((message) => {
      console.log('success: ' + message)
    }).catch((error) => {
      console.log(error.name + ' ' + error.message)
    })*/
    
//---------------------

    // function loadImage(url){
    //   return new Promise(function(resolve, reject){
    //     var request = new XMLHttpRequest()
    //     request.open('GET', url)
    //     request.responseType = 'blob' //es el type para imagenes
    //     request.onload = function(){
    //       if(request.status == 200){
    //         resolve(request.response)
    //       } else {
    //         reject(Error('Image couldn\'t be loaded. Error: '+ request.statusText))
    //       }
    //     }

    //     request.onerror = function(){
    //       reject(Error('Opps!, there was a network error.'))
    //     }

    //     request.send()//basicamente esto "dispara" todo lo que seteaste mas arriba
    //   })
    // }

    // var body = document.querySelector('body')
    // var image = new Image()
    // loadImage('data:image/jpeg;base64,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')
    //   .then((response) => {
    //     var imageURL = window.URL.createObjectURL(response)
    //     image.src = imageURL
    //     body.append(image)
    //   })
    //   .catch((reason) => {
    //     console.log(Error(reason))
    //   }) 

    // -----------------------------------------

    // console.log('this is the start');
    // var p1 = Promise.resolve(3);
    // //var p1 = Promise.reject('promise 1 rejected');
    // var p2 = 42;
    // var p3 = new Promise(function(resolve, reject) {
    //   setTimeout(resolve, 2000, 'this is promise 3');
    // });

    // console.log('this is one message');
    // var p = Promise.all([p1, p2, p3])
    //   .then(response => {
    //     console.log(response);
    //     console.log("jamonsio del medio");
    //   })
    //   .catch(reason => {
    //     console.log(reason);
    //     console.log("not today");
    //   });

    // console.log('this is another message');
    // console.log(p);

    // setTimeout(function() {
    //   console.log('the stack is now empty');
    //   console.log(p);
    // });
    // console.log('this is the end');

    // -------------- PROMISE ALL -----------------------------

    // console.log("this is the start")
    // var p1 = Promise.resolve(3)
    // var p2 = 42
    // var p3 = new Promise((resolve, reject) => {
    //   setTimeout(resolve, 2000, "this is promise 3") 
    // })

    // var ans = Promise.all([p1, p2, p3])
    //   .then(response => {
    //     console.log(response)
    //   })
    //   .catch(reason => {
    //     console.log(reason)
    //   })
    // console.log(ans)

    // // this is the Start 
    // // promise {<pending>} espera 2 seg
    // // (3) [3,42,'this is promise 3'] 
    // console.log("--------------")
    // var p4 = Promise.resolve(4)

    // ans = Promise.all([p1, p2, p4])
    //   .then(response => {
    //     console.log(response)
    //   })
    //   .catch(reason => {
    //     console.log(reason)
    //   })
    // console.log(ans)

    // console.log("---------------------")
    // //lo mismo que arriba

    // var p5 = Promise.reject("nopiti Nope")
    
    // var ans2 = Promise.all([p1, p2, p5])
    //   .then(response => {
    //     console.log(response)
    //   })
    //   .catch(reason => {
    //     console.log(reason)
    //   })

    // console.log(ans2)
    
    // ahora queda como Promise <pending>}
    // y despues el Error: si 

    // ------------------ PROMISE RACE -----------------------

    // var p1 = new Promise( (resolve, reject) => {
    //     setTimeout(resolve, 5000, "uno");
    // });
    // var p2 = new Promise( (resolve, reject) => {
    //     setTimeout(resolve, 2000, "dos");
    // });
 
    // Promise.race([p1, p2]).then( value => {
    //   console.log(value); // "dos"
    //   // Ambas se resuelven, pero la p2 antes.
    // });

    // ------------------ ALL SETTLED -----------------------

    // const promise1 = Promise.resolve(3);
    // const promise2 = new Promise((resolve, reject) => setTimeout(reject, 100, 'foo'));
    // const promises = [promise1, promise2];

    // Promise.allSettled(promises).
    //   then((results) => results.forEach((result) => console.log(result.status)));

    // // expected output:
    // // "fulfilled"
    // // "rejected"

    // const promise3 = Promise.resolve(3);
    // const promise4 = new Promise((resolve, reject) => setTimeout(resolve, 2000, 'foo'));
    // const promises2 = [promise3, promise4];
 
    // Promise.allSettled(promises2).
    //   then((results) => results.forEach((result) => console.log(result.status)));

    // // expected output: espera dos segundos y...
    // // "fulfilled"
    // // "fulfilled"