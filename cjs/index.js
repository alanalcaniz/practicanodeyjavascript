//common js import
const {sum} = require('./suma.js')

console.log(sum(2,5))


document.getElementById('prueba').addEventListener("click", () => {
    document.getElementById('prueba').innerHTML = "Hola soy alan";
});