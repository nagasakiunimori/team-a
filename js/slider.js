$(function () {
    $('#chikunennsuu').slider();
    $('#chikunennsuu').on('slide', function(slideEvt){
        $('#chikunenSliderVal').text(slideEvt.value);
    });
    
        $('#jogen').slider();
    $('#jogen').on('slide', function(slideEvt){
        $('#jogenSliderVal').text(slideEvt.value);
    });
    
        $('#kagen').slider();
    $('#kagen').on('slide', function(slideEvt){
        $('#kagenSliderVal').text(slideEvt.value);
    });
    
        $('#flore').slider();
    $('#flore').on('slide', function(slideEvt){
        $('#floreSliderVal').text(slideEvt.value);
    });
    
        $('#toho').slider();
    $('#toho').on('slide', function(slideEvt){
        $('#tohoSliderVal').text(slideEvt.value);
    });

});