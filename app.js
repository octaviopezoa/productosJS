//sirve para capturar los datos
class Product {
    constructor(nombre,precio,fecha){
        this.nombre = nombre;
        this.precio = precio;
        this.fecha = fecha;
    }
}

//Interactua con el html
class UI {
    addProduct(producto) {
        //Obtenemos la ubicación donde listaremos los productos
        const listaProducto = document.getElementById('listado');
        
        //creamos un div que se agregará en el html
        const element = document.createElement('div');

        //insertamos el código en el html
        element.innerHTML = `
        <div class="card text-center mb-4">
            <div class="card-body">
                <strong>Producto: </strong> ${producto.nombre}
                <strong>Precio: </strong> ${producto.precio}
                <strong>Fecha fabricación: </strong> ${producto.fecha}
            </div>
        </div>
        `;

        //agregamos el html en el código
        listaProducto.appendChild(element);

    }

    deleteProduct() {

    }

    showMessage() {

    }
}

//Eventos del DOM
//Capturamos valores del formulario
document.getElementById('formulario').addEventListener('submit', function(e){
    const nombre = document.getElementById('nombre').value;
    const precio = document.getElementById('precio').value;
    const fecha = document.getElementById('fecha').value;
    console.log(nombre,precio,fecha);

    //creamos un nuevo objeto producto
    const producto = new Product(nombre,precio,fecha);

    const ui = new UI();
    ui.addProduct(producto);
    
    //Evitamos que se refresque la pagina al hacer el submit
    e.preventDefault();
})