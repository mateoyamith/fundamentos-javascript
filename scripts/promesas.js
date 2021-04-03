const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'

const opts = { crossDomain: true }

function obtenerPersonaje(id) {

    return new Promise((resolve, reject) => {
        const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`;
        $
            .get(url, opts, (data) => {
                resolve(data);
            })
            .fail(() => reject(id))
    })
}

function onError(id) {
    console.log(`Sucedio un error al obtener el personaje ${id}`);
}

//Mejorando promesas en paralelo con async y await
async function obtenerPersonajes() {
    var ids = [1, 2, 3, 4, 5, 6, 7]
    var promesas = ids.map(id => obtenerPersonaje(id))
    try {
        var personajes = await Promise.all(promesas)
        console.log(personajes)
    } catch (id) {
        onError(id)
    }
}

obtenerPersonajes();

/*
//Promesas en paralelo
var ids = [1, 2, 3, 4, 5, 6, 7]
    // var promesas = ids.map((id)=>{
    //     return obtenerPersonaje(id)
    // })

var promesas = ids.map(id => obtenerPersonaje(id))
Promise
    .all(promesas)
    .then(personajes => console.log(personajes))
    .catch(onError)
*/


/*
//Promesas en serie
obtenerPersonaje(1)
    .then(personaje => {
        console.log(`El personaje 1 es ${personaje.name}`)
        return obtenerPersonaje(2)
    })
    .then(personaje => {
        console.log(`El personaje 2 es ${personaje.name}`)
        return obtenerPersonaje(3)
    })
    .then(personaje => {
        console.log(`El personaje 3 es ${personaje.name}`)
        return obtenerPersonaje(0)
    })
    .then(personaje => {
        console.log(`El personaje 4 es ${personaje.name}`)
        return obtenerPersonaje(5)
    })
    .catch(onError)
*/