$(document).ready(function() {
    $('#masInformacion').hide();

    $('#verMas').click(function() {
        $('#verMas').hide();
        $('#masInformacion').show();
      });
      
      $('#verMenos').click(function() {
        $('#masInformacion').hide();
        $('#verMas').show();
      });
    

})
