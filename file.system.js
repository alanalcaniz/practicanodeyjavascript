const fs = require('node:fs') //usar node:

const stats = fs.statSync('./archivo.txt')

console.log(
    stats.isFile(), //si es un fichero
    stats.isDirectory(), //si es un directorio
    stats.isSymbolicLink(), //si es un enlace simbólico
    stats.size, //tamaño en bytes
)