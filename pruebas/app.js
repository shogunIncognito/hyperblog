$(document).ready(function(){
    $('#boton').click(function (e) { 
        $('#lista').slideToggle(500);
        $(this).html() == 'Mostrar' ? $(this).html('Ocultar'):$(this).html('Mostrar')
    });
    $('li').hover(function() {
        $(this).css('border', 'solid 4px red');
    },function() {
        $(this).css('border', '');
        
    })
    console.log('Hola')
})