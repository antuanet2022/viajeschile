/* Perspnalizando el Scroll Smooth */
$(document).ready(function() {
    
    $("a").click(function() { 
        var gato= this.hash
    
        $("html,body").animate(
            {
                scrollTop: $(gato).offset().top
            },
            3000 /* Personalizando el scroll para que se más lento */
        )
    })
})

/* Aplicando Tooltips en el boton Enviar dentro de Contactos*/
/* Aplicando Ventana emergentes alert */
var tooltipTriggerList =
[].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
return new bootstrap.Tooltip(tooltipTriggerEl)
})

/* Mensaje "El correo fue enviado correctamente...".*/
$("button2").click(function(){
    alert("El correo fue enviado correctamente")
})