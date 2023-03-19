// simulador de compra con vendedor seleccionado

class Persona {
    constructor(nombre, id, apellido, edad, mail) {
        this.id = id
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
        this.mail = mail
    }
}
const personas = [new Persona("jorge", 1, "ramirez", 34, "jorgeram@gmail.com"),
new Persona("martin", 2, "pascal", 26, "martinpas@gmail.com"),
new Persona("adrian", 3, "diaz", 28, "adriandiaz@gmail.com"),]

// agrego otra persona 
personas.push(
    new Persona("gonzalo", 4, "perez", 32, "gonzaloperez@gmail.com"))



// seleccion de personal


let conQuienComprar = parseInt(prompt("¿con quien desea comprar?1.jorge-2.martin-3.adrian-4.gonzalo"))
let escogioVendedor = false
let suVendedorEs
let personax

while (escogioVendedor === false) {
    personax = personas.find((personax => personax.id === conQuienComprar))
    if (!personax) {
        conQuienComprar = parseInt(
            prompt("escoge el vendedor correcto 1.jorge-2.martin-3.adrian-4.gonzalo")
        )
    }
    else { escogioVendedor = true }

}
console.log(personax)



alert(`su vendedor es: ${personax.nombre}`)

// se construye producto

class Producto {
    constructor(nombre, id, modelo, precio) {
        this.nombre = nombre
        this.id = id
        this.modelo = modelo
        this.precio = precio


    }
}
const productos = [new Producto("iphone", 1, 14, 600),
new Producto("led", 2, 27, 300),
new Producto("asus", 3, 2000, 800)]


console.log(productos);
let solicitudDeProducto = parseInt(prompt("que producto desea comprar? 1.celulares-2.monitor-3.pc"))

let seleccionDeProducto = false


let productox

while (seleccionDeProducto === false) {
    productox = productos.find((productox => productox.id === solicitudDeProducto))
    if (!productox) {
        solicitudDeProducto = parseInt(
            prompt("escoge producto correcto 1.celulares-2.monitor-3 .pc ")
        )



    }
    else { seleccionDeProducto = true }
}
console.log(productox)


// funcion para saber el total de lo comprado


function calcularPrecioTotal(producto) {
    const costoEnvio = 10;
    const costoSeguro = producto.precio * 0.05;
    const precioTotal = producto.precio + costoEnvio + costoSeguro;
    return precioTotal;
}

const precioTotal = calcularPrecioTotal(productox);
alert(`El precio total del producto con envio y seguro es: ${productox.nombre} es: ${precioTotal}`);

// seguir comprando ( faltan detalles )

let seguirComprando = true;

while (seguirComprando) {

    console.log(`Seleccionaste el producto: ${productox.nombre} - Precio: $${productox.precio}`);

    const respuesta = prompt("¿Deseas comprar más productos? (s/n)");

    if (respuesta === "s") {
        seguirComprando = true;
    }
    else {
        seguirComprando = false;
    }
}
alert("Gracias por tu compra!");