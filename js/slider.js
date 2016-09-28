$(function() {
    
  $('#chikunennsuu').slider().on('slide', function(e) {
    console.log(e.value);
  });
    
    $('#jogen').slider().on('slide', function(e) {
    console.log(e.value);
  });
    
    $('#kagen').slider().on('slide', function(e) {
    console.log(e.value);
    });
        
     $('#flore').slider().on('slide', function(e) {
    console.log(e.value);
    });
    
     $('#toho').slider().on('slide', function(e) {
    console.log(e.value);
    });
    
});