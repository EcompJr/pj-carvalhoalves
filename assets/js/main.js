$(document).ready(function(){
    $(".anchor").click(function (event) {
        event.preventDefault();
        $('html,body').animate({ scrollTop: $(this.hash).offset().top - 100}, 600);
    });

    $(".owl-carousel1").owlCarousel({
        items:1,
        loop:true,
        nav: false,
        navText: ["<i class='fas fa-angle-left fa-3x'></i>","<i class='fas fa-angle-right fa-3x'></i>"]
    });

    $(".owl-carousel2").owlCarousel({
        loop: true,
        margin: 30,
        responsive:{
            0:{
                items: 2,
            },
            769: {
                items: 5
            }
        }
    });
    $('#profissionais .card-body .card-text').matchHeight();
});