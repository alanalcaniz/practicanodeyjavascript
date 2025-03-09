const os = require('node:os')

console.log('Información del sistema operativo: ')
console.log('-------------------')

console.log('Nombre del sistema operativo', os.platform())
console.log('Varsión del sistma operativo', os.release())
console.log('Arquitectura', os.arch())
console.log('CPUs', os.cpus()) 