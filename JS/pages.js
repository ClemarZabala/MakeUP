//AQUI ESTAN TODOS LOS PRODUCTOS DE LA PAGINA//
let productosData = [
    {
        Categoria: 'Labiales',
        Productos: [
            { ID: 'LB-M', nombre: 'Labial matte', Precio: 3500 },
            { ID: 'LB-G', nombre: 'Glos glitter', Precio: 4000 },
            { ID: 'LB-GH', nombre: 'Glos hidratante', Precio: 3500 },
            { ID: 'LB-GC', nombre: 'Glos color', Precio: 2500 },
            { ID: 'LB-GV', nombre: 'Glos voluminizador', Precio: 3500 },
            { ID: 'LB-T', nombre: 'Glos transparente', Precio: 2500 },
            { ID: 'LB-TG', nombre: 'Glos transparente grande', Precio: 3500 },
            { ID: 'LB-RS', nombre: 'Glos sache', Precio: 2000 },
            { ID: 'LB-PATI', nombre: 'Glos patita', Precio: 2500 },
            { ID: 'LB-TANG', nombre: 'Glos tango', Precio: 3500 },
            { ID: 'LB-DIAM', nombre: 'Glos diamantito', Precio: 2500 },
            { ID: 'LB-FRUT', nombre: 'Glos frutal ', Precio: 3000 },
            { ID: 'LB-GLITOBA', nombre: 'Glos obalado ', Precio: 5000 },
            { ID: 'LB-SHEG', nombre: 'Glos sheglam ', Precio: 3800 },
            { ID: 'BAL-FRUENTE', nombre: 'Balsamo entero', Precio: 3000 },
            { ID: 'BAL-FRUMED', nombre: 'Balsamo frutilla mediano', Precio: 3000 },
            { ID: 'BAL-BUHO', nombre: 'Balsamo buho ', Precio: 3000 },
            { ID: 'BAL-PAL', nombre: 'Balsamo palta', Precio: 3000 },
            { ID: 'BAL-CAC', nombre: 'Balsamo cactus', Precio: 3000 },
            { ID: 'BAL-OSO', nombre: 'Balsamo oso', Precio: 3000 },
            { ID: 'BAL-ELEF', nombre: 'Balsamo elefante', Precio: 3000 },
            { ID: 'BAL-CHAN', nombre: 'Balsamo chancho', Precio: 3000 },
            { ID: 'HUC-ROS', nombre: 'Hucmentante rosa ', Precio: 3000 },
            { ID: 'LB-MATBAR', nombre: 'Labial matte barra ', Precio: 4800 },
            { ID: 'LB-MATTTR', nombre: 'Labial matte para tr ', Precio: 2500 },
            { ID: 'LB-MATBARCHI', nombre: 'Labial matte barra chica ', Precio: 2000 },
            { ID: 'LB-MATGOMA', nombre: 'Labial matte goma ', Precio: 3000 },
            { ID: 'TIN-SAND', nombre: 'Tinta sandia ', Precio: 2500 },
            { ID: 'TIN-HELA', nombre: 'Tinta helado ', Precio: 2500 },
            { ID: 'TIN-OSO', nombre: 'Tinta oso ', Precio: 3000 }
        ]
    }
];

// Guardar el array en localStorage
localStorage.setItem('productos', JSON.stringify(productosData));

// Funcion para mostrar los productos de labiales en la pagina
function mostrarProductos(productos) {
    const productosList = document.getElementById('productos-list');
    productos.forEach(producto => {
        let productoDiv = document.createElement('div');
        productoDiv.classList.add('col-md-4'); // Clase de Bootstrap para el diseño de la grid

        productoDiv.innerHTML = `
            <div class="card">
                <img src="" class="card-img-top" alt="Imagen de producto">
                <div class="card-body">
                    <h5 class="card-title">${producto.nombre}</h5>
                    <p class="card-text">Precio: $${producto.Precio}</p>
                    <label for="cantidad-${producto.ID}">Cantidad:</label>
                    <input type="number" id="cantidad-${producto.ID}" name="cantidad" min="1" value="1" class="form-control mb-2" step="1">
                    <button class="btn btn-primary">Comprar</button>
                </div>
            </div>
        `;

        productosList.appendChild(productoDiv);
    });
}

// Obtenemos los productos de localStorage y filtramos solo los de la categoría "Labiales"
const productos = JSON.parse(localStorage.getItem('productos'));
const labiales = productos.find(categoria => categoria.Categoria === 'Labiales').Productos;

// Llamamos a la función para mostrar los productos
mostrarProductos(labiales);
