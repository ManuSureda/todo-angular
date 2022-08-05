let id = 0;

function logTime2(){
    let t = new Date();

    console.log("this is call: " + id + " : " + t.getHours() + ":" + t.getMinutes() + ":" + t.getSeconds());
    id++;
}

var myFirstPromise = new Promise((resolve, reject) => {

    let idTimeOut = setTimeout(function(){
        logTime2();
        if(id > 0){
            resolve("success");
        } else {
            reject("rejected");
        }
    },2000);
    clearTimeout(idTimeOut);
});

myFirstPromise
    .then((msg) => {
        console.log(msg);
    })
    .catch((error) => {
        console.log(error);
    });

console.log("this is the start")
var p1 = Promise.resolve(3)
var p2 = 42
var p3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, "this is promise 3")
});

var ans = Promise.all([p1, p2, p3])
  .then(response => {
    console.log(response)
  })
  .catch(reason => {
    console.log(reason)
  });
console.log(ans);

// this is the Start 
// promise {<pending>} espera 2 seg
// (3) [3,42,'this is promise 3'] 
console.log("--------------");
var p4 = Promise.resolve(4);

ans = Promise.all([p1, p2, p4])
  .then(response => {
    console.log(response)
  })
  .catch(reason => {
    console.log(reason)
  });
console.log(ans);

