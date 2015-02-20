$(document).ready(function () {
//    $('[data-toggle=offcanvas]').click(function () {
//        $('.row-offcanvas').toggleClass('active');
//    });
//    $('[data-toggle=collapse]').click(function () {
//        $('#ziel').collapse({show: true})
//    });
//    $('#ziel').collapse({
//        toggle: false
//    });
//    $('#ziel').collapse('hide');
//    $('#ziel').collapse('show');

//    $('#collapse').on('show.bs.collapse', function () {
//        alert('Dies wird angezeigt, wenn das Menü angeklickt wird zum Ausfahren');
//    })

    $('#collapse').on('shown.bs.collapse', function () {
        alert('Dies wird angezeigt, wenn das Menü ausgefahren ist und wieder einfahren will');
    })

});