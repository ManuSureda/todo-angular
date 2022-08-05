// Pide la edad y si es mayor de 18 años indica que ya puede conducir.
function conducir() {
    let edad = prompt("introducir edad");

    if( Number(edad) == edad ) {
        if(edad > 17){
            alert("ya puede conducir")
        } else {
            alert("aun no tienes edad para conducir");
        }
    } else {
        alert("la proxima vez introdusca un valor numerico");
    }
}

// 3. Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”.
// Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.
function cadenas() {
    let ans = "";

    do {
        cadena = prompt("cadena: ");

        if(cadena != ''){
            ans = ans + "-" + cadena;
        }
    } while (confirm("continuar?"));

    alert(ans);
}

// 4. Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número 
// deberá indicarse con un «alert» y seguir pidiendo. Al salir con “cancelar” deberá
// indicarse la suma total de los números introducidos.
function numeros() {
    let numeros = 0;

    do {
        let n = prompt("numero: ");
        if(Number(n) == n){
            numeros = numeros + Number(n);
        } else {
            alert("introduzca solo numeros");
        }
    } while (confirm("seguir?"));

    alert("el resultado es: " + numeros);
}

// ------ ARRAYS ------

function manejoArrays() {
    // ------- DECLARACION ------- 

    let arrayVacio = new Array();
    //genera un array vacio (sin tampoco indice 0)
    // []
    // length: 0

    let array0 = new Array([1]);
    // genera un array con un sub-indice 0 que a su vez es un arreglo
    // 0: [1] -> esto es un arreglo
    array0.push(2);
    array0.push("hola");
    array0.push('jamon');
    // es un arreglo
    // en el indice 0 tiene un arreglo de un solo elemento ([1])
    // el resto se cargo como data normal:
    // 0: [1] -> esto es un arreglo
    // 1: 2
    // 2: "hola"
    // 3: "jamon"
    // length: 4
    
    let array1 = new Array([1, 2, "hola", 'jamon']);
    //esto crea un solo subindice 0 con un array adentro cargado con el 1, 2 ....
    // 0: (4) [1, 2, 'hola', 'jamon']

    let array2 = [2,3,1];
    // 0: 2
    // 1: 3
    // 2: 1

    // ------- CARGAR/ELIMINAR/SPLICE ------- 

    let array3 = new Array();
    array3.push(1);
    // GENERA un nuevo sub-indice con el numero 1,
    array3.push(2);
    array3.push(3);
    // console.log(array3);
    array3.pop();//elimina el ultimo sub-indice
    // console.log(array3);
    array3.splice(0,1);

    array3.push(2);
    array3.push(3);

    array3.splice(0,3);//elimina desde el indice 0, 3 elementos hacia adelante

    array3.push(0,1,2,3,4,5,6,7,8,9);
    // console.log(array3);// [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    array3.splice(2,3);// a partir del indice 2 inclusive, va a eliminar 3 elementos
    // console.log(array3);// [0, 1, 5, 6, 7, 8, 9]
    // array3.splice(2,0,[2,3,4]); esto te agregaria en el indice 2 un arreglo con esos valores
    array3.splice(2,0,2,3,4);// ahora si, a partir del indice 2 inclusive, va a agregar: 2, 3, 4
    // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    
    //quiero incertar el contenido de "nuevo" en algun lugar de "array"
    function v1() {
        let array = new Array();
        array.push(0,1,2,3,4,5,6);
        let nuevo = new Array();
        nuevo.push(7,8,9);

        // for(let i = 0 ; i < nuevo.length ; i++){

        //     array.splice(3,0,nuevo[i]);
        //     //[0, 1, 2, 9, 8, 7, 3, 4, 5, 6] -> no esta del todo bien
        // }

        let desde = 3;
        for (let i = 0; i < nuevo.length; i++) {

            array.splice(desde, 0, nuevo[i]);
            desde++;
            //ahora si
        }
        console.log(array);

    }
    // v1();


    let array4 = new Array();
    array4.push(8,4,3,8,9,1,0,10,55,6);//crea varios indices
    array4.push([1,2,3]);// crea un unico indice con un arreglo [1, 2, 3];
    array4.pop();

    // ---- ORDENAR ----
    array4.sort((a, b) => a-b);//ordena de menor a mayor
    // console.log(array4);
    array4.sort((a, b) => b-a);//ordena de mayor a menor
    // console.log(array4);
    array4.sort();// no lo uses asi por que lo deja raro
    // [0, 1, 10, 3, 4, 55, 6, 8, 8, 9]
    // console.log(array4);

    let arrayPersonas = new Array();
    arrayPersonas.push(
        {name: 'manuel', lastName: 'sureda', age: 24},
        {name: 'juan', lastName: 'vazquez', age: 88},
        {name: 'marin', lastName: 'kazan', age: 21},
        {name: 'shashaniel', lastName: 'shulen', age: 2}
    );

    arrayPersonas.sort((a, b) => {
        if (a.name < b.name) {
            return -1;
        } else if (a.name > b.name){
            return 1;
        } else {
            return 0;
        }
    });

    arrayPersonas.sort((a, b) => {
        if(a.age < b.age) {
            return -1;
        } else if (a.age > b.age) {
            return 1;
        } else {
            return 0;
        }
    })
    // console.log(arrayPersonas);

    // ----- CLONAR -----
    let array5 = new Array();
    array5.push(1,2,3,4,5,6);
    // console.log(array5);
    let mismoArray = array5; // esto hace que copie la direccion de memoria, 
    //por lo tanto, lo que le hagas a "mismoArray" le va a pasar a array5

    let arrayCopy1 = [...array5];// metodo de copia 1, clona el contenido de array 5 en arrayCopy
    //y lo que le hagas a arrayCopy NO afectar a array5

    let arrayCopy2 = array5.slice(0);//copia el contenido desde el indice 0, (si no se pone nada el 0 es el default)
    // console.log(arrayCopy2);
    let arrayCopy3 = array5.slice(0,2);//copia desde el indice 0 HASTA el indice 2 NO inclusive
    // console.log(arrayCopy3);//[1, 2]

    let arrayCopy4 = array5.slice(1,3);//copia desde el indice 1 inclusive HASTA el indice 3 NO inclusive
    // console.log(arrayCopy4);//[2, 3]

    let arrayCopy5 = array5.slice(-2);//se va al final del array, vuelve 2 posiviones y las copia
    // console.log(arrayCopy5);//[5, 6]
    
    // ----- FIND -----
    let aFind = new Array();
    aFind.push(1,2,3,4,5,6,7);
    let found = aFind.find(element => element > 3)

    // ----- FIND INDEX -----
    found = aFind.findIndex( el => el > 1 );

    // copiar determinados elementos de un arreglo en otro
    let original = [1,2,3,4,5,6,7];
    let ans = new Array();

    original.forEach(element => {
        if (element > 2) {
            ans.push(element);
        }
    });

    // ----- FILTER -----
    let newArrayFiltered = original.filter(element => element > 2);

    let objectArray = new Array();
    objectArray.push(
        {name: 'Fabio', age: 12},
        {name: 'Ramiro', age: 11},
        {name: 'Manuel', age: 13},
        {name: 'Juan', age: 14},
        {name: 'Pablo', age: 17}
    );

    let nameAux = 'Nahuel';

    let filteredObjectArray = objectArray.filter( element => element.name < nameAux );
    
    // concat
    let a = ["hola soy a "];
    let b = ["hola soy b ", "sigo siendo b "];
    let c = ["hola soy c "];

    let d = a.concat(b,'soy d', c);// y en este caso lo que le hagas a d no afecta a "a"
    // osea no pasa nada en "a" si le hago un d.pop() por mas que hayas echo un "="
}
manejoArrays();

//Dado un vector de enteros, comprobar el mayor, el menor y por último la media de todos.
function arrayFunction1() {
    let array = new Array();
    array.push(5,88,4,2,6,7,11);
    console.log(array);

    // let copy = array;//SI HACES ESTO, LO QUE LE HAGAS A COPY, AFECTA TAMBIEN A ARRAY!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    // ya que le estas asignando la referencia en memoria
    let copy = [...array];// al parecer asi se copia un array de otro,
    console.log(copy);

    copy.sort((a, b) => a-b);
    let mayor = copy.pop();// mayor
    let menor = copy.shift();// menor

    let cant = array.length;
    let sum = 0;

    // console.log(array); array sigue igual
    // console.log(copy); copy si se modifico
    
    array.forEach((element) => {
        console.log(element);
        sum = sum + element;
        console.log(sum);
    });

    let media = sum/cant;

    console.log("mayor: "+ mayor + "\nmenor: " + menor + "\nmedia: " + media.toFixed(2));

}
// arrayFunction1();

function findAndFilter() {
    let array = new Array();
    array.push(2,3,1,3,4,5,6,2,4,2,66,33,22,1);

    let found = array.find(element => element == 66);
    // console.log(found);
    found = array.findIndex(element => element == 66);
    // console.log(found);
    

}
// findAndFilter();

// eclara un array que vamos a llamar “clasificaciones” con los siguientes valores:
// Ana, Oswaldo, Raúl, Celia, María, Antonio
// (vamos a suponer que es el orden de clasificación de un concurso, en un momento dado)
// Imprime la clasificación actual
// El concurso continua, y se van modifican esas posiciones anteriores. Debemos cambiar en el array:


function ejercicio() {
    let clasificaciones = ['Ana', 'Oswaldo', 'Raúl', 'Celia', 'María', 'Antonio'];
    console.log(clasificaciones);

    // Celia adelanta a Raúl
    let indexAux = clasificaciones.findIndex(element => element == 'Raúl');
    clasificaciones.splice(indexAux,2,'Celia','Raúl');
    console.log(clasificaciones);

    // Antonio es descalificado y se elimina del concurso
    indexAux = clasificaciones.findIndex(element => element == 'Antonio');
    clasificaciones.splice(indexAux,1);
    console.log(clasificaciones);

    // Detrás de Ana y antes de Oswaldo se clasifican dos nuevos concursantes: Roberto y Amaya, en ese orden
    indexAux = clasificaciones.findIndex(element => element == 'Ana');
    clasificaciones.splice(indexAux+1,0,'Roberto', 'Amaya');
    console.log(clasificaciones);

    // Hay una nueva participante que pasa a encabezar la clasificación: Marta
    clasificaciones.unshift('Marta');
    console.log(clasificaciones);

    // Imprime la clasificación actualizada y comprueba que se ha hecho correctamente
    console.log(clasificaciones);
}
ejercicio();