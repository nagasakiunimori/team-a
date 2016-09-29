var chikunensu_n=30;
var chinryo_to_n=10;
var chinryo_from_n=0;
var flore_n=0;
var ekitoho_n=0;

$(function () {
    var Slider1 = $("#chikunensu").slider();
    var chikunensu_n = Slider1.slider('getValue');
    var Slider2 = $("#jogen").slider();
    var chinryo_to_n = Slider2.slider('getValue');
    console.log("デバッグ1: " + chinryo_to_n);
    var Slider3 = $("#kagen").slider();
    var chinryo_from_n = Slider3.slider('getValue');
    var Slider4 = $("#flore").slider();
    var flore_n = Slider4.slider('getValue');
    var Slider5 = $("#toho").slider();
    var ekitoho_n = Slider3.slider('getValue');
});
 console.log("デバッグ2: " + chinryo_to_n);
/*
    $('#kagen').slider();
    $('#kagen').on('slide', function (slideEvt) {
        $('#kagenSliderVal').text(slideEvt.value);
    });

    $('#flore').slider();
    $('#flore').on('slide', function (slideEvt) {
        $('#floreSliderVal').text(slideEvt.value);
    });

    $('#toho').slider();
    $('#toho').on('slide', function (slideEvt) {
        $('#tohoSliderVal').text(slideEvt.value);
    });
});
*/