(function($) {
    "use strict"; 
    // jQuery da rolagem da página:
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Adiciona destaque ao menu principal no momento do Scroll
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Altera o muni para modo responsivo
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Ajuste para a navegação geral
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // Animação da rolagem
    window.sr = ScrollReveal();
    sr.reveal('.sr-icons', {
        duration: 600,
        scale: 0.3,
        distance: '0px'
    }, 200);
    sr.reveal('.sr-button', {
        duration: 1000,
        delay: 200
    });
    sr.reveal('.sr-contact', {
        duration: 600,
        scale: 0.3,
        distance: '0px'
    }, 300);

    // Animação dos popups
    $('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Carregando imagem #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1]
        },
        image: {
            tError: '<a href="%url%">A imagem #%curr%</a> não pode ser carregada.'
        }
    });

})(jQuery); 
