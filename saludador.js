const saludar = (nombre, apellido, callback) => {
    console.log(`Hola ${nombre} ${apellido} `);
    callback();
}

module.export = saludar