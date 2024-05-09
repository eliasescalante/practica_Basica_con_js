const BIENVENIDA = "¡Bienvenido a mi lista de compras!";
const DESPEDIDA = "¡Gracias por usar la lista de compras! ¡Hasta luego!";

function iniciar() {
    // Función principal que inicia el programa
    console.log("Iniciando el programa...");
    alert(BIENVENIDA);
    let decision = obtenerDecision();

    listarCompras(decision);
    console.log("Finalizando el programa...");
    alert(DESPEDIDA);
} 

function obtenerDecision() {
    // Función para obtener la decisión del usuario
    console.log("Obteniendo decisión del usuario...");
    let decision;

    do {
        decision = parseInt(prompt("Ingresa 1 para comenzar o 2 para terminar"));
    } while (isNaN(decision) || (decision !== 1 && decision !== 2));
    console.log("Decisión obtenida:", decision);
    return decision;
}

function listarCompras(decision) {
    // Función para listar las compras
    console.log("Listando compras...");

    if (decision === 2) {
        console.log("El usuario ha decidido terminar el programa.");
        alert("¡Hasta luego!");
        return;
    }

    let productos = [];


    do {
        let producto = prompt("Ingresa tu producto al listado");

        if (producto !== null && producto !== "") {
            productos.push(producto);
            console.log("Producto agregado:", producto);
            decision = obtenerDecisionContinuar(); 
        } else {
            alert("Por favor, ingresa un producto válido.");
        }
    } while (decision === 1);

    mostrarLista(productos);
}

function obtenerDecisionContinuar() {
    // Función para obtener la decisión del usuario sobre continuar agregando productos
    console.log("Obteniendo decisión de continuar...");
    let decision;

    do {
        decision = confirm("¿Desea continuar agregando productos?");
    } while (decision === null);
    console.log("Decisión de continuar obtenida:", decision);

    return decision ? 1 : 2;
}

function mostrarLista(productos) {
    // Función para mostrar la lista de compras ingresada por el usuario
    console.log("Mostrando lista de compras...");

    if (productos.length === 0) {
        console.log("No se han ingresado productos.");
        alert("No has ingresado ningún producto.");
        return;
    }

    let cantidadProductos = productos.length;
    let lista = "Tu lista de compras ingresada es:\n";

    productos.forEach(function(producto, index) {
        lista += "- " + producto;
        if (index !== productos.length - 1) {
            lista += "\n";
        }
    });
    lista += "\nCantidad de productos: " + cantidadProductos;
    console.log("Lista de compras mostrada:");
    console.log(lista);
    alert(lista);
}

// Arranque de la ejecución
iniciar();


