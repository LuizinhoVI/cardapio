// $(function() {
//     setTimeout(function() {

//         $(".intro").css("display", "none");
//         $("footer").css("display", "block");
//         $(".cardapio").css("display", "block");

//         // $("main").css("background-image", " linear-gradient(to bottom, white, rgb(160, 44, 44))");
//     }, 2900);
// });


// function gelados() {
//     $(".gelados").css("display", "grid");
//     $("body").css("background", "red");
//     $(".gelados").css("color", "white");
//     $(".categoria").css("display", "none");
// }

function refri() {
    $(".fototema").css("display", "block");
    $(".refri").css("display", "grid");
    // $("body").css("background", "red");
    $(".refri").css("color", "black");
    $(".categoria").css("display", "none");
    $(".nometema").css("display", "block");
}

function salgados() {
    $(".fototema").css("display", "block");
    $(".salgados").css("display", "grid");
    // $("body").css("background", "red");

    $(".categoria").css("display", "none");
    // $(".nometema").css("conte", "block");
}

function doces() {
    $(".fototema").css("display", "block");
    $(".doces").css("display", "grid");
    // $("body").css("background", "red");

    $(".categoria").css("display", "none");
    // $(".nometema").css("conte", "block");
}

contador_pedido = 0;

function mais() {
    var mostrar = document.getElementById("numero-add");
    $(mostrar).text(contador_pedido++)
    console.log(mostrar[1].innerHTML)
}

function menos() {




    if (contador_pedido > 0) {
        $("#numero-add").text(contador_pedido -= 1)
    }
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