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
        const element = document.createElement('tr');

        //insertamos el código en el html
        element.innerHTML = `
        
        <tr>
            <td>${producto.nombre}</td>
            <td>${producto.precio}</td>
            <td>${producto.fecha}</td>
            <td><a href="#" class="btn btn-danger" name="delete">Eliminar</a></td>
        </tr>
        `;

        //agregamos el html en el código
        listaProducto.appendChild(element);

        //Llamamos desde la misma clase el metodo
        this.resetForm();

    }

    resetForm() {
        document.getElementById('formulario').reset();
    }

    deleteProduct(elemento) {
        //Si exite el elemento, procede a buscar su elemento padre,
        //para eliminarlo
        if (elemento.name === "delete") {
            elemento.parentElement.parentElement.remove();
        }
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
});

document.getElementById('listado').addEventListener('click', function(e){
    const ui = new UI();
    //Buscamos la ubicacion del elemento
    ui.deleteProduct(e.target);
})