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
QTD_PASTEL = [0, 10];
//REFRI

QTD_COCA_ = [0, 10];
QTD_GUARANA = [0, 10];
QTD_FANTA = [0, 10];
QTD_SPRIT = [0, 10];
QTD_PEPSI = [0, 10];




function add_coxinha() {
    var btn_mais = document.getElementsByClassName("btn+");
    var mostrar = document.getElementsByClassName("btn-contator");

    if (QTD_COXINHA[0] < QTD_COXINHA[1]) {
        QTD_COXINHA[0]++;
        $(mostrar[0]).text(QTD_COXINHA[0]);
        console.log(btn_mais[1].value);
    }

}

function pop_coxinha() {
    var btn_mais = document.getElementsByClassName("btn+");
    var mostrar = document.getElementsByClassName("btn-contator");
    if (QTD_COXINHA[0] <= QTD_COXINHA[1] && QTD_COXINHA[0] > 0) {
        QTD_COXINHA[0]--;
        $(mostrar[0]).text(QTD_COXINHA[0]);

    }

}

function add_pastel() {
    var btn_mais = document.getElementsByClassName("btn+");

    var mostrar = document.getElementsByClassName("btn-contator");
    if (QTD_PASTEL[0] < QTD_PASTEL[1]) {
        QTD_PASTEL[0]++;
        $(mostrar[1]).text(QTD_PASTEL[0]);

    }

}

function pop_pastel() {
    var btn_mais = document.getElementsByClassName("btn+");

    var mostrar = document.getElementsByClassName("btn-contator");
    if (QTD_PASTEL[0] <= QTD_PASTEL[1] && QTD_PASTEL[0] > 0) {
        QTD_PASTEL[0]--;
        $(mostrar[1]).text(QTD_PASTEL[0]);

    }

}








numero = 1;

function foto_click() {

    if (numero > 0) {
        $(".foto").css("box-shadow", "0px 5px 5px 0px blue")
        numero = 0
    } else {
        $(".foto").css("box-shadow", "0px 5px 5px 0px black")
        numero = 1;
    }


}