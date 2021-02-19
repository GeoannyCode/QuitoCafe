$(document).ready(function(){
    $('.menu a').each(function(index, elemento){
        $(this).css({
            'top': '-200px'
        });

        $(this).animate({
            top: 0
        }, 2000 + (index * 500));
    });

    if( $(window).width() > 800 ){
        $('header .textos').css({
            opacity: 0, 
            marginTop: 0
        });

        $('header .textos').animate({
            opacity: 1, 
            marginTop: '-52px'
        }, 2000);
    }

    let acercaDe = $('#inicio').offset().top,
        menu = $('#platillos').offset().top,
        galeria = $('#galeria').offset().top,
        ubicacion = $('#ubicacion').offset().top;

    $('#btn-inicio').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 480
        }, 1000);
    });

    $('#btn-menu').on('click', function(){
        $('html, body').animate({
            scrollTop: menu
        }, 1000);
    });

    $('#btn-galeria').on('click', function(){
        $('html, body').animate({
            scrollTop: galeria
        }, 1000);
    });

    $('#btn-ubicacion').on('click', function(){
        $('html, body').animate({
            scrollTop: ubicacion
        }, 1000);
    });
});