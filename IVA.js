// // Ejercicio 1;
// // Calculo IVA
// // Para el laboratorio de este módulo, vamos a calcular el total de la compra de un producto (su precio multiplicado por la cantidad)
// // y aplicar el IVA del 21% excepto para los siguientes tipos de producto:
// // "alimentacion": 10% ; "libro": 4%
// // No se admitirán cantidades negativas (en cuyo caso se tomará como 0).

// const product = { count: 3, price: 12.55, type: "ropa" };

// product.count > 0 ? product.count : product.count = 0;

// var subTotal = product.price * product.count;

// var IVA;
// switch (product.type) {
//     case "libro": IVA = 0.04; break;
//     case "alimentación": IVA = 0.1; break;
//     default: IVA = 0.21; break;
// };

// var IVAQuantity = product.price * IVA;

// var Total = (IVAQuantity + product.price) * product.count;

// console.log("Subtotal: " + subTotal + "€");
// console.log("IVA aplicado: " + IVA * 100 + "%");
// console.log("Cantidad IVA por unidad: " + IVAQuantity + "€");
// console.log("Total: " + Total + "€");





// Ejercicio 2; functions

// Calcular precio total
// Vamos a crear una función getTotal que acepta por parámetro el producto, y devuelva el precio total:

const product = { count: 3, price: 12.55, type: "ropa" };

product.count > 0 ? product.count : product.count = 0;

function getTotal() {
    return product.price * product.count;
};


// Calcular el IVA
// Vamos a crear una función getVat que recibe el producto
// y calcula el IVA (por unidad) aplicable dependiendo del tipo de producto (el iva puede ser: 0.1, 0.04, 0.21).:

function getVat() {
    switch (product.type) {
        case "libro": IVA = product.price * 0.04; break;
        case "alimentación": IVA = product.price * 0.1; break;
        default: IVA = product.price * 0.21; break;
    }
    return IVA * product.count;
};


// Ejercicio 2-2 Avanzado

// Utilizando la función anterior, crearemos una para calcular el total de IVA (IVA por unidad multiplicado por cantidad):
// Es decir una función que se llama getTotalVat(product) que devuelva el número de productos pedidos multiplacado por el precio con IVA.

function getTotalVat() {
    return product.count * product.price + getVat();
}


//A partir de las funciones anteriores, vamos a crear una que recibe un producto, y realiza los calculos de total e IVA para mostrarlos por consola:

function mostrarProduct () {
    console.log("Total: " + getTotal() + "€");
    console.log("IVA: " + getVat() + "€");
    console.log("Total a pagar: " + getTotalVat() + "€");
};

mostrarProduct();