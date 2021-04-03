const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'

//const lukeUrl = `${API_URL}${[PEOPLE_URL.replace(':id',1)]}`;
const opts = { crossDomain: true }

/*
// Ejemplo callback 1
function obtenerPersonaje(id, callback) {
    const url = `${API_URL}${[PEOPLE_URL.replace(':id',id)]}`;

    $.get(url, opts, function(data) {
        console.log(`Hola, yo soy ${data.name}`);
        if (callback) {
            callback();
        }
    })

}

Infiernos de callbacks
obtenerPersonaje(1, function() {
    obtenerPersonaje(2, function() {
        obtenerPersonaje(3)
    })
});
*/

function obtenerPersonaje(id, callback) {
    const url = `${API_URL}${[PEOPLE_URL.replace(':id',id)]}`;
    $
        .get(url, opts, callback)
        .fail(() => {
            console.log(`Sucedio un error. No se pudo obtener el personaje ${id}`)
        });
}


obtenerPersonaje(1, function(data) {
    console.log(`Hola, yo soy ${data.name}`);

    obtenerPersonaje(2, function(data) {
        console.log(`Hola, yo soy ${data.name}`);

        obtenerPersonaje(3, function(data) {
            console.log(`Hola, yo soy ${data.name}`);

            obtenerPersonaje(0, function(data) {
                console.log(`Hola, yo soy ${data.name}`);

                obtenerPersonaje(5, function(data) {
                    console.log(`Hola, yo soy ${data.name}`);
                })
            })
        })
    })
});