// console.log('wow, estoy ejecutando mi primer JavaScript')

/*function saludo() {
    alert('hola mundo')
}

saludo()*/

/*document.getElementById('botonPrueba').addEventListener('click',  function(){
    console.log('Ha pulsado el botón!!!!!!!!!!!!!')
    var nuevoParrafo = document.createElement('p')
    nuevoParrafo.innerHTML = '<b>este contenido </b>se ha generado de manera dinámica después de pulsar el botón'
    document.querySelector('main').appendChild(nuevoParrafo)

})*/

document.getElementById('formulario').addEventListener('submit', function(e){
    e.preventDefault()
    console.log('se ha enviado el formulario')
    var nombre = document.getElementById('nombre')
    var nuevoLi = document.createElement('li')
    nuevoLi.innerHTML = nombre.value
    document.querySelector('#listaAsistentes').appendChild(nuevoLi)
    // nombre = "" no funciona
    //document.getElementById('nombre').value = ""
    nombre.value = ""
})