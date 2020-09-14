$( document ).ready(function() {
});

$('#formulario').on( "submit", function(event) {
    event.preventDefault();
    console.log ("Entro la request");
    $.ajax ({
        url: "http://localhost:3000/altas",
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

