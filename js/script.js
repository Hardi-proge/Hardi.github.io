$(document).ready(function () {
    //event pada saat link di klik

    $('.page-scroll').on('click', function (event) {
        event.preventDefault();
        //ambiil isi href
        var tujuan = $(this).attr('href');
        // tangkap elemen ybs
        var elemenTujuan = $(tujuan);

        // pindahkan scroll
        $('html,body').animate({
            scrollTop: $(elemenTujuan).offset().top - 60
        },
            800, 'linear'
        );

    });

});