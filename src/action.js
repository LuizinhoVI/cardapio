// $(function() {
//     setTimeout(function() {

//         $(".intro").css("display", "none");
//         $(".cardapio").css("display", "block");
//     }, 2900);
// });


// function gelados() {
//     $(".gelados").css("display", "grid");
//     $("body").css("background", "red");
//     $(".gelados").css("color", "white");
//     $(".categoria").css("display", "none");
// }

// function refri() {
//     $(".refri").css("display", "grid");
//     // $("body").css("background", "red");
//     $(".refri").css("color", "black");
//     $(".categoria").css("display", "none");
// }







function gelados() {
    $(".gelados").css("display", "grid");
    $("body").css("background", "red");
    $(".gelados").css("color", "white");
    $(".categoria").css("display", "none");
}

function refri() {
    $(".refri").css("display", "grid");
    // $("body").css("background", "red");
    $(".refri").css("color", "black");
    $(".categoria").css("display", "none");
}
numero = 1;

function foto_click() {

    if (numero > 0) {
        $(".foto").css("box-shadow", "0px 5px 5px 0px blue")[2]
        numero = 0
    } else {
        $(".foto").css("box-shadow", "0px 5px 5px 0px black")[2]
        numero = 1;
    }


}