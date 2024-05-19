const { agregar, leer } = require('./operaciones.js');

const [opcion, mascotaNombre,mascotaEdad, mascotaTipo, mascotaColor, mascotaEnfermedad] = process.argv.slice(2);

if (opcion === "registrar") {
    agregar(mascotaNombre, mascotaEdad, mascotaTipo, mascotaColor, mascotaEnfermedad);
}

if (opcion === "leer") {
    leer();
}
