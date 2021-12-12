// $(function() {
//     setTimeout(function() {

//         $(".intro").css("display", "none");
//         $("footer").css("display", "block");
//         $(".cardapio").css("display", "block");
//         $(".categoria").css("display", "grid");
//         $(".navegador").css("display", "grid");

//         // $("main").css("background-image", " linear-gradient(to bottom, white, rgb(160, 44, 44))");
//     }, 2900);
// });


function gelados() {
    $(".gelados").css("display", "grid");
    $("body").css("background", "red");
    $(".gelados").css("color", "white");
    $(".categoria").css("display", "none");
}

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




QTD_COXINHA = [0, 10];
QTD_PASTEL = [0, 10]


function add_salgados0() {
    var btn_mais = document.getElementsByClassName("btn+");
    var mostrar = document.getElementsByClassName("btn-contator");

    if (QTD_COXINHA[0] < QTD_COXINHA[1]) {
        QTD_COXINHA[0]++;
        $(mostrar[0]).text(QTD_COXINHA[0]);
        console.log(btn_mais[1].value);
    }

}


function pop_salgados0() {
    var btn_mais = document.getElementsByClassName("btn+");
    var mostrar = document.getElementsByClassName("btn-contator");
    if (QTD_COXINHA[0] <= QTD_COXINHA[1] && QTD_COXINHA[0] > 0) {
        QTD_COXINHA[0]--;
        $(mostrar[0]).text(QTD_COXINHA[0]);
        console.log(btn_mais[1].value);
    }

}

function add_salgados1() {
    var btn_mais = document.getElementsByClassName("btn+");

    var mostrar = document.getElementsByClassName("btn-contator");
    if (contador_pedido < quantidade_mais) {
        contador_pedido++;
        $(mostrar[1]).text(contador_pedido);

    }

}

function pop_salgados1() {
    var btn_mais = document.getElementsByClassName("btn+");

    var mostrar = document.getElementsByClassName("btn-contator");
    if (contador_pedido <= quantidade_mais && contador_pedido > 0) {
        contador_pedido--;
        $(mostrar[1]).text(contador_pedido);

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