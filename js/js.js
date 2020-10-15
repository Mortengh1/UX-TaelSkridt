/*
 * fil: js.js
 * purpose: introdction to jQuery
 */
console.log('file: js/js.js loaded');

// A $( document ).ready() block.
$(document).ready(function () { // kører så snart DOM er klar

    console.log("jQuery 3.5.1 running. Alert level green.");

    // ... min kode herfra ...

    // Fader content på forsiden ind
    $('.content_forside').css('display', 'none');
    $('.content_forside').fadeIn(1000);

    // ... min kode slut ...

}); // denne line må ikke slettes
