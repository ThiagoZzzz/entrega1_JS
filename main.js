// 1) Determinar si el n° es par o impar.
function clasificar_nums (n){
    if (n % 2 === 0) {
        console.log(`El número ${n} es par.`)}
    else{
        console.log(`El número ${n} es impar.`)}
    }

clasificar_nums(9)

// 2) Determinar si un n° es mayor que otro.
function mayor_menor (n1, n2){
    if (n1 > n2) {
        console.log(`El número ${n1} es mayor que ${n2}.`)
    }
    else if (n2 > n1) {
        console.log(`El número ${n2} es mayor que ${n1}.`)
    }
    else{
        console.log(`Los números ${n1} y ${n2} son iguales.`)
    }
}

mayor_menor(-10,-10)

// 3) Determinar si el n° es multiplo de 5.
function multiplo_5 (n){
    if (n % 5 === 0) {
        console.log(`El número ${n} es múltiplo de 5.`)
    }
    else{
        console.log(`El número ${n} no es múltiplo de 5.`)
    }
}

multiplo_5(45)

// 4) Imprimir los números desde 0 hasta n.
function zero_to (n){
    for (let i = 0; i <= n; i++) {
        console.log(i)
    }
}

zero_to(6)

// 5) Imprimir palabra n-veces.
function imprimir_palabra (palabra, n){
    for (let i = 0; i < n; i++) {
        console.log(`${palabra}, (repetición: ${i}).`)
    }
}

imprimir_palabra("Messi", 5)

// 6) Imprimir elementos de un array.
function imprimir_elementos (array){
    for (e of array){
        console.log(e)
    }
}

imprimir_elementos(["Virus", 85, "Soda Stereo", [1,2]])

// 7) Imprimir elementos del array salteando la 5ta posición.
function saltar_5(array) {
        for (let i = 0; i < array.length; i++) {
            if (i !== 4) {
                console.log(array[i]);
        }
    }
}

saltar_5([1,2,3,4,5,6,7,8,9,10])

// 8) Elemento * n.
function elemento_multiplicado (array, n){
    for (e of array){
        console.log(`${e} x ${n}= ${e*n}`)
    }
}

elemento_multiplicado([2,4,6,8], 10)