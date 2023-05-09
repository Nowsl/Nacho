window.addEventListener("load", () => {

    fetch('https://g9cd7530b8a8613-ecommerce.adb.sa-santiago-1.oraclecloudapps.com/ords/inacap_ecommerce/productos_miles/')
        .then((resultado) => {
            return (resultado.json());
        })
        .then((datos) => {
            for (i in datos.items) {
                console.log(datos.items[i]);
                document.getElementById("productos").innerHTML +=
                    `
                <div class="col">
                    <div class="card" style="width: 18rem;">
                        <img src="img/${datos.items[i].imagen}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${datos.items[i].nombre}</h5>
                        <p class="card-text">Precio: ${datos.items[i].precio}</p>
                        <a href="#" class="btn btn-primary">add to Cart</a>
                    </div>
                    </div>
            </div>
                
                `;
            }
        })
        .then(() => { })
        .catch(() => { })

});

async function buscar() {
    await 123;

}