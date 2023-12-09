//En cada ejercicio crearemos un nuevo bloque (con { y }) donde escribiremos nuestro código
//Así podemos usar variables con el mismo nombre en diferentes ejercicios sin que haya ningún conflicto

//Importante: para los ejercicios 5 y 6 utiliza un único bloque, ya que comparten código.
//Importante: lo mismo para los ejercicios 7 y 8.

//Ejercicio 1
{
    //Escribe en la consola un mensaje como este al principio de cada bloque de ejercicio
    let a = 25
    let b = a
    a = 40
    console.log(b); //el resultado es 25 ya que a la variable b se le ha asignado el valor de a en ese momento y no cambia cuando cambias a = 40

    let c = [25]
    let d = c
    c = [40]
    console.log(d); //igual que antes el valor de d seguirá siendo [25] porque cuando se ha asignado el valor a d, el valor de c es [25] y no cambia al nuevo valor
}

//Ejercicio 2
{
    let var1 = 25
    let var2 = "Un texto"
    let var3 = false
    let var4 = { key: "value" }
    let var5 = null

    //funcion con un valor tipo, muestra el tipo de dato de la variable con typeof
    function tipodevariable(tipo) {
        console.log(typeof tipo)
    }

    //llamada a funcion junto con la variable
    tipodevariable(var1) //number
    tipodevariable(var2) //string
    tipodevariable(var3) //boolean
    tipodevariable(var4) //object
    tipodevariable(var5) //object

}

//Ejercicio 3
{
    function calcularIVA() {
        let precio = document.getElementById('precioIVA').value //variable precio que se le asigna el valor que se introduce en el recuadro
        let iva = precio * 0.21 //variable iva que calcula el iva del valor de precio
        document.getElementById('resultadoIVA').textContent = iva //le asigna el valor de la variable iva al elemento resultadoIVA
    }
    document.getElementById('calcularIVA').addEventListener('click', calcularIVA); //llama a la funcion en cuanto se detecta el evento de click
}

//Ejercicio 4
{
    function numCaracteres () {
        let texto = document.getElementById('texto').value 
        let numero = texto.length //variable numero que calcular la longitud del texto
        document.getElementById('numCaracteres').textContent = numero
    }
    document.getElementById('texto').addEventListener('input', numCaracteres) //evento input
}

//Ejercicio 5 y 6
{
let cadena = [] //variable array vacia
let valorMax = null

function cadenaActu(){ //funcion para actualizar el valor en pantalla
    let lista = document.getElementById('list') //asigna el valor de list a la variable lista
    lista.textContent = JSON.stringify(cadena) //transforma el array en string
    valorMax = encontrarMax(cadena) // asigna a la variable el calculo de la funcion encontrarMax del valor de la variable cadena
    actuMaximo() //actuliza el campo max
}

function actuMaximo(){ 
    let max = document.getElementById('max') //asigna a la variable max el valor de elemento HTML max
    max.textContent = valorMax != null ? valorMax : null //sentencia if que muestra el numero maximo mientras no sea null
}

function encontrarMax(array) { 
    return Math.max(...array) //pasa todos los elementos del array con la funcion Math.max que nos devuelve el maximo
}

document.getElementById('addNumber').addEventListener('click', function() { //evento click con function 
    let nuevoNumero = document.getElementById('item').value //asigna el valor de item a la variable

    cadena.push(parseFloat(nuevoNumero)) //añade el numero al array
    
    cadenaActu() //actualiza el valor en pantalla
})
}

//Ejercicio 7 y 8
{
 let vacia = JSON.parse(localStorage.getItem('vacia')) || [] //cargar array desde localstorage

 function actualizar() {
    localStorage.setItem('vacia', JSON.stringify(vacia)) //guarda el array en el localstore
    document.getElementById('total').innerHTML = vacia.length; //actualiza el campo 'total'
}

 document.getElementById('addItem').addEventListener('click', function() { //evento con una funcion 
    let persona = { // variable con objetos
        nombre: document.getElementById('name').value, //valor al objeto nombre
        apellidos: document.getElementById('surname').value, //valor del objeto apellidos
        edad: document.getElementById('age').value //valor del objeto edad
    }

    vacia.push(persona) //añade el objeto al array

    actualizar() //acutaliza el localstorage y el campo 'total'
  
 })
 actualizar()

}