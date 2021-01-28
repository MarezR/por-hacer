const descripcion = {
    alias: "d",
    demand: true,
    desc: 'Descripcion de la tarea por hacer'
}

const completado = {
    alias: "c",
    default: true,
    desc: "Marca como completado o pendiente la tarea"

}

const argv = require('yargs')
    .command("crear", "crear un elemento por hacer", {
        descripcion
    })
    .command("actualizar", "Actualiza el estado completado de una tarea", {
        descripcion,
        completado
    })
    .command("borrar", "Elimina un elemento de la lista by descripción", {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}