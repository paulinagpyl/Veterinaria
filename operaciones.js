const fs = require('fs');

const agregar = (mascotaNombre, mascotaEdad,mascotaTipo, mascotaColor, mascotaEnfermedad) => {
    const cita = JSON.parse(fs.readFileSync("citas.json", "utf8")) 
    if (!mascotaNombre || !mascotaTipo || !mascotaColor || !mascotaEnfermedad) {
        console.log("Para hacer una cita debe ingresar todos los datos de la mascota");
        return 
    }
    cita.push({ mascotaNombre, mascotaEdad, mascotaTipo, mascotaColor, mascotaEnfermedad })
    fs.writeFileSync("citas.json", JSON.stringify(cita)) 
    console.log(cita)
}

const leer = () => {
    const contenido = JSON.parse(fs.readFileSync("citas.json", "utf8"))
    console.log(contenido)
}

module.exports={ agregar, leer };
