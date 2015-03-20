function addClassIn() {
    var subMenu = $('.docollapse li.active');
    if (subMenu.length > 0) {
        subMenu.parents('ul').addClass('in');
    }
}


function addElementUid() {
    // button ausfindig machen
    var findButton = $('.sidebar-nav .findDataTarget');
    // data-target auslesen
    var readButtonDataTarget = findButton.data('target');
    // erstes Zeichen des Ergebnisses entfernen
    readButtonDataTarget = readButtonDataTarget.substring(1);
    // finde Geschwisterelement ul und hänge die id ein
    $('.sidebar-nav .findDataTarget + ul').attr("id", readButtonDataTarget);
}


function slideDropdown() {
    $('.dropdown-toggle').click(function () {
        $(this).next('.dropdown-menu').slideToggle(500);
    });
}


function checkActiveLink() {
    $('.dropdown').on('hide.bs.dropdown', function () {
       //alert('hide-methode ausgelöst');
        show.bs.dropdown();
    });
}


$(document).ready(function() {
//   addClassIn();
//   addElementUid();
    slideDropdown();
//    checkActiveLink();
});
