// Lista de productos de la tienda
let productosData = [
    {
        Categoria: 'Labiales',
        Productos: [
            { ID: 'LB-M', nombre: 'Labial Matte', Precio: 3500 },
            { ID: 'LB-G', nombre: 'Glos Glitter', Precio: 4000 },
            { ID: 'LB-GH', nombre: 'Glos Hidratante', Precio: 3500 },
            { ID: 'LB-GC', nombre: 'Glos Color', Precio: 2500 },
            { ID: 'LB-GV', nombre: 'Glos Voluminizador', Precio: 3500 },
            { ID: 'LB-T', nombre: 'Glos Transparente', Precio: 2500 },
            { ID: 'LB-TG', nombre: 'Glos Transparente Grande', Precio: 3500 },
            { ID: 'LB-RS', nombre: 'Glos Sache', Precio: 2000 },
            { ID: 'LB-PATI', nombre: 'Glos Patita', Precio: 2500 },
            { ID: 'LB-TANG', nombre: 'Glos Tango', Precio: 3500 },
            { ID: 'LB-DIAM', nombre: 'Glos Diamantito', Precio: 2500 },
            { ID: 'LB-FRUT', nombre: 'Glos Frutal', Precio: 3000 },
            { ID: 'LB-GLITOBA', nombre: 'Glos Obalado', Precio: 5000 },
            { ID: 'LB-SHEG', nombre: 'Glos Sheglam', Precio: 3800 },
            { ID: 'BAL-FRUENTE', nombre: 'Bálsamo Entero', Precio: 3000 },
            { ID: 'BAL-FRUMED', nombre: 'Bálsamo Frutilla Mediano', Precio: 3000 },
            { ID: 'BAL-BUHO', nombre: 'Bálsamo Buho', Precio: 3000 },
            { ID: 'BAL-PAL', nombre: 'Bálsamo Palta', Precio: 3000 },
            { ID: 'BAL-CAC', nombre: 'Bálsamo Cactus', Precio: 3000 },
            { ID: 'BAL-OSO', nombre: 'Bálsamo Oso', Precio: 3000 },
            { ID: 'BAL-ELEF', nombre: 'Bálsamo Elefante', Precio: 3000 },
            { ID: 'BAL-CHAN', nombre: 'Bálsamo Chancho', Precio: 3000 },
            { ID: 'HUC-ROS', nombre: 'Hidratante Rosa', Precio: 3000 },
            { ID: 'LB-MATBAR', nombre: 'Labial Matte Barra', Precio: 4800 },
            { ID: 'LB-MATTTR', nombre: 'Labial Matte Para TR', Precio: 2500 },
            { ID: 'LB-MATBARCHI', nombre: 'Labial Matte Barra Chica', Precio: 2000 },
            { ID: 'LB-MATGOMA', nombre: 'Labial Matte Goma', Precio: 3000 },
            { ID: 'TIN-SAND', nombre: 'Tinta Sandía', Precio: 2500 },
            { ID: 'TIN-HELA', nombre: 'Tinta Helado', Precio: 2500 },
            { ID: 'TIN-OSO', nombre: 'Tinta Oso', Precio: 3000 }
        ]
    },
    {
        Categoria: 'Iluminadores',
        Productos: [
            { ID: 'IL-L', nombre: 'Iluminador Líquido', Precio: 4000 },
            { ID: 'IL-R', nombre: 'Iluminador Rolo', Precio: 2000 },
            { ID: 'IL-IYC', nombre: 'Iluminador y Contorno', Precio: 6000 },
            { ID: 'IL-POLGR', nombre: 'Iluminador Polvo Grande', Precio: 6000 },
            { ID: 'IL-POL', nombre: 'Iluminador Polvo', Precio: 4000 },
            { ID: 'IL-HAD', nombre: 'Iluminador Polvo de Hadas', Precio: 4000 }
        ]
    },
    {
        Categoria: 'Rimeles',
        Productos: [
            { ID: 'RM-2-1', nombre: 'Rimel Dos en Uno', Precio: 4000 },
            { ID: 'RM-SKYR', nombre: 'Rimel Sky Rosa', Precio: 5000 },
            { ID: 'RM-SKYR2', nombre: 'Rimel Sky Rosa 2', Precio: 5000 },
            { ID: 'RM-CHE', nombre: 'Rimel Cherimoya', Precio: 6000 },
            { ID: 'RM-AM', nombre: 'Rimel Amarillo', Precio: 3500 },
            { ID: 'RM-GA', nombre: 'Rimel Gato', Precio: 3500 },
            { ID: 'RM-CL', nombre: 'Rimel Color', Precio: 3500 },
            { ID: 'RM-TR', nombre: 'Rimel Transparente', Precio: 4000 },
            { ID: 'RM-CL2', nombre: 'Rimel Color 2', Precio: 3000 },
            { ID: 'RM-PP', nombre: 'Pegamento y Pestaña', Precio: 3500 },
            { ID: 'RM-CC', nombre: 'Cera de Cejas', Precio: 2500 }
        ]
    },
    {
        Categoria: 'Delineadores',
        Productos: [
            { ID: 'DL-SH', nombre: 'Delineador Sheglam', Precio: 2500 },
            { ID: 'DL-C', nombre: 'Delineador Común', Precio: 2000 },
            { ID: 'DL-S', nombre: 'Delineador Sello', Precio: 4000 }
        ]
    },
    {
        Categoria: 'Sombras',
        Productos: [
            { ID: 'SM-TE', nombre: 'Sombra Tejar', Precio: 4000 },
            { ID: 'SM-GG', nombre: 'Sombra Good Girls', Precio: 8500 },
            { ID: 'SM-CH', nombre: 'Sombra Challenge', Precio: 5000 },
            { ID: 'SM-IN', nombre: 'Sombra Intense', Precio: 7000 },
            { ID: 'SM-CHI', nombre: 'Sombra Chica', Precio: 5000 },
            { ID: 'SM-LUCK', nombre: 'Sombra Luck', Precio: 9000 },
            { ID: 'SM-SHOCK', nombre: 'Sombra Shock', Precio: 7000 },
            { ID: 'SM-NUDE', nombre: 'Sombra Nude', Precio: 10000 },
            { ID: 'SM-72', nombre: 'Sombra 72', Precio: 25000 },
            { ID: 'SM-GRANDE', nombre: 'Sombra Grande', Precio: 18000 }
        ]
    },
    {
        Categoria: 'Brochas',
        Productos: [
            { ID: 'BR-X20', nombre: 'Brocha 20', Precio: 9000 },
            { ID: 'BR-CE', nombre: 'Caja Espejo', Precio: 9000 },
            { ID: 'BR-CITY', nombre: 'Brocha City', Precio: 6500 },
            { ID: 'BR-SOB', nombre: 'Brocha Sobre', Precio: 8000 },
            { ID: 'BR-X3', nombre: 'Brocha 3', Precio: 3000 }
        ]
    },
    {
        Categoria: 'Rubores',
        Productos: [
            { ID: 'RB-SHE', nombre: 'Rubor Sheglam', Precio: 6000 },
            { ID: 'RB-CREM', nombre: 'Rubor Crema', Precio: 35000 },
            { ID: 'RB-BARR', nombre: 'Rubor Barra', Precio: 6000 },
            { ID: 'RB-GEL', nombre: 'Rubor Gelatina', Precio: 4500 }
        ]
    },
    {
        Categoria: 'Skincare',
        Productos: [
            { ID: 'SC-IN', nombre: 'Skincare Invisible', Precio: 1000 },
            { ID: 'SC-CO', nombre: 'Colágeno Ojos', Precio: 1000 },
            { ID: 'SC-AM', nombre: 'Ampollas', Precio: 2500 },
            { ID: 'SC-VIN', nombre: 'Vinchas', Precio: 3600 },
            { ID: 'SC-PER', nombre: 'Perfiladores', Precio: 1500 },
            { ID: 'SC-SER', nombre: 'Serum', Precio: 6000 },
            { ID: 'SC-STH', nombre: 'Serum Thelma', Precio: 8000 },
            { ID: 'SC-CRE', nombre: 'Cremas', Precio: 2000 },
            { ID: 'SC-MASCPN', nombre: 'Mascarilla Punto Negro', Precio: 2500 },
            { ID: 'SC-MASC', nombre: 'Mascarilla', Precio: 1500 },
            { ID: 'SC-TOA', nombre: 'Toallita', Precio: 2500 },
            { ID: 'SC-DESM', nombre: 'Desmaquillador', Precio: 4500 }
        ]
    },
    {
        Categoria: 'Fijadores',
        Productos: [
            { ID: 'PV-TRANS', nombre: 'Polvo Translucido', Precio: 5000 },
            { ID: 'PV-COM', nombre: 'Polvo Compacto', Precio: 3000 },
            { ID: 'PV-SPRAY', nombre: 'Fijador Spray', Precio: 5500 },
            { ID: 'PV-PRIMER', nombre: 'Primer', Precio: 3500 }
        ]
    },
    {
        Categoria: 'Mix',
        Productos: [
            { ID: 'ARQ', nombre: 'Arqueador', Precio: 3000 },
            { ID: 'CORR', nombre: 'Corrector', Precio: 3800 },
            { ID: 'PER', nombre: 'Perforadora', Precio: 2500 },
            { ID: 'BAS', nombre: 'Bases', Precio: 3000 },
            { ID: 'PEI', nombre: 'Peine', Precio: 3000 },
            { ID: 'ESP', nombre: 'Esponja', Precio: 1500 },
            { ID: 'SCOR', nombre: 'Strass Corto', Precio: 1500 },
            { ID: 'SLAR', nombre: 'Strass Largo', Precio: 1500 }
        ]
    },
    {
        Categoria: 'Porta cosméticos',
        Productos: [
            { ID: 'PORT-NEG', nombre: 'Porta Cosmético Negro', Precio: 13000 },
            { ID: 'PORT-CARA', nombre: 'Porta Cosmético Caramelo', Precio: 15000 }
        ]
    }
];

// Guardar productos en LocalStorage para acceso desde otras páginas
localStorage.setItem('productos', JSON.stringify(productosData));

// Función para mostrar los productos de labiales en la página de labiales
function mostrarProductos(productos) {
    const productosList = document.getElementById('productos-list');
    productos.forEach(producto => {
        let productoDiv = document.createElement('div');
        productoDiv.classList.add('col-md-4'); // Clase para diseño con Bootstrap

        productoDiv.innerHTML = `
            <div class="card">
                <img src="../asets/img/Productos/${producto.ID}.jpeg" alt="Imagen de ${producto.nombre}" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">${producto.nombre}</h5>
                    <p class="card-text">Precio: $${producto.Precio}</p>
                    <label for="cantidad-${producto.ID}">Cantidad:</label>
                    <input type="number" id="cantidad-${producto.ID}" class="form-control" min="1" value="1">
                    <button class="btn btn-primary mt-2" onclick="agregarAlCarrito('${producto.ID}')">Agregar al carrito</button>
                </div>
            </div>
        `;
        productosList.appendChild(productoDiv);
    });
}

// Obtenemos los productos de LocalStorage y filtramos los labiales
const productos = JSON.parse(localStorage.getItem('productos'));
const labiales = productos.find(categoria => categoria.Categoria === 'Labiales').Productos;

// Llamar a la función para mostrar los productos de labiales
if (document.getElementById('productos-list')) {
    mostrarProductos(labiales);
}

// Función para agregar productos al carrito
function agregarAlCarrito(productoId) {
    const producto = labiales.find(item => item.ID === productoId);
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    // Obtener la cantidad seleccionada por el usuario
    const cantidadInput = document.getElementById(`cantidad-${productoId}`).value;
    const cantidad = parseInt(cantidadInput) || 1;

    // Verificar si el producto ya está en el carrito
    const productoEnCarrito = carrito.find(item => item.ID === productoId);
    if (productoEnCarrito) {
        productoEnCarrito.cantidad += cantidad;
    } else {
        carrito.push({ ...producto, cantidad: cantidad });
    }

    localStorage.setItem('carrito', JSON.stringify(carrito)); // Guardar el carrito actualizado en LocalStorage

    // Notificación con SweetAlert
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: `${producto.nombre} agregado al carrito (${cantidad} unidades)`,
        showConfirmButton: false,
        timer: 1500,
        toast: true
    });
}

// Función para cargar el carrito en la página de compras
function cargarCarrito() {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const carritoItems = document.getElementById('carrito-items');
    const carritoTotal = document.getElementById('carrito-total');
    let total = 0;

    carritoItems.innerHTML = ''; // Limpiar el contenido antes de agregar los productos

    carrito.forEach(producto => {
        const totalProducto = producto.Precio * producto.cantidad;
        total += totalProducto;

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${producto.nombre}</td>
            <td>$${producto.Precio}</td>
            <td>${producto.cantidad}</td>
            <td>$${totalProducto}</td>
            <td><button class="btn btn-danger" onclick="eliminarProducto('${producto.ID}')">Eliminar</button></td>
        `;
        carritoItems.appendChild(row);
    });

    carritoTotal.textContent = `Total: $${total}`;
}

// Función para eliminar productos del carrito
function eliminarProducto(productoId) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito = carrito.filter(producto => producto.ID !== productoId);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    cargarCarrito();
}

// Función para realizar la compra con SweetAlert y formulario para el comprador
function realizarCompra() {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    if (carrito.length === 0) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Tu carrito está vacío.'
        });
        return;
    }

    // SweetAlert para solicitar nombre completo y celular
    Swal.fire({
        title: 'Finalizar compra',
        html: `
            <input type="text" id="nombre" class="swal2-input" placeholder="Nombre completo">
            <input type="tel" id="celular" class="swal2-input" placeholder="Número de celular">
        `,
        confirmButtonText: 'Confirmar compra',
        focusConfirm: false,
        preConfirm: () => {
            const nombre = Swal.getPopup().querySelector('#nombre').value;
            const celular = Swal.getPopup().querySelector('#celular').value;
            if (!nombre || !celular) {
                Swal.showValidationMessage('Por favor ingresa tu nombre y número de celular.');
            }
            return { nombre: nombre, celular: celular };
        }
    }).then((result) => {
        if (result.isConfirmed) {
            const comprador = result.value;

            // Guardar la compra en LocalStorage
            const compra = {
                productos: carrito,
                comprador: comprador,
                fecha: new Date().toLocaleString()
            };

            let compras = JSON.parse(localStorage.getItem('compras')) || [];
            compras.push(compra);
            localStorage.setItem('compras', JSON.stringify(compras)); // Guardar la compra

            // Vaciar el carrito
            localStorage.removeItem('carrito');

            // SweetAlert de confirmación de compra
            Swal.fire({
                icon: 'success',
                title: 'Compra finalizada',
                text: 'En breve nos contactaremos con usted.',
                confirmButtonText: 'OK',
                timer: 3000
            });

            // Recargar la página del carrito
            cargarCarrito();
        }
    });
}

// Ejecutar las funciones necesarias dependiendo de la página
window.onload = function() {
    if (document.getElementById('carrito-items')) {
        cargarCarrito();
    }

    const btnPago = document.getElementById('btn-pago');
    if (btnPago) {
        btnPago.addEventListener('click', realizarCompra);
    }
}

