$(function() {
    setTimeout(function() {

        $(".intro").css("display", "none");
        $(".cardapio").css("display", "block");
    }, 2900);
});


function gelados() {
    $(".gelados").css("display", "grid");
    $("body").css("background", "red");
    $(".gelados").css("color", "white");
    $(".categoria").css("display", "none");
}