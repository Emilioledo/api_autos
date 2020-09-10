$( document ).ready(function() {
});

$('#formulario').on( "submit", function(event) {
    event.preventDefault();
    $.ajax ({
        url: "http://localhost:3000/",
        dataType: 'json',
        type: "POST",
        contentType: 'application/json',
        data: JSON.stringify({
            "marcaVehiculo": $('#marcaVehiculo').val(),
            "modeloVehiculo": $('#modeloVehiculo').val(),
            "colorVehiculo": $('#colorVehiculo').val(),
        }),
        success: (data) => {
            console.log(data);
          }
    });
    



});