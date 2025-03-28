import { platform, release, arch, cpus, freemem, totalmem, uptime } from 'node:os'

console.log('Información del sistema operativo: ')
console.log('-------------------')

console.log('Nombre del sistema operativo', platform())
console.log('Varsión del sistma operativo', release())
console.log('Arquitectura', arch())
console.log('CPUs', cpus()) 
console.log('Memoria libre', freemem() / 1024 / 1024)
console.log('Memoria total', totalmem() / 1024 / 1024)
console.log('uptime', uptime() / 60 / 60)