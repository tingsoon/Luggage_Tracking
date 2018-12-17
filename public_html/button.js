$('#submitDeparture').on('click', function() {
    if ($('#containerTableDeparture').css('opacity') == 0) {
        $('#containerTableDeparture').css('visibility', "visible");
        $('#containerTableArrival').css('visibility', "hidden");
        $('#containerTableDeparture').css('display', "block");
        $('#containerTableDeparture').css('opacity', 1);
        $('#containerTableArrival').css('opacity', 0);
    }
    else {
        $('#containerTableDeparture').css('visibility', "hidden");
        $('#containerTableDeparture').css('display', "none");
        $('#containerTableDeparture').css('opacity', 0);
    }
});

$('#submitArrival').on('click', function() {
    if ($('#containerTableArrival').css('opacity') == 0) {
        $('#containerTableArrival').css('visibility', "visible");
        $('#containerTableDeparture').css('visibility', "hidden");
        $('#containerTableDeparture').css('display', "none");
        $('#containerTableArrival').css('opacity', 1);
        $('#containerTableDeparture').css('opacity', 0);
    }
    else {
        $('#containerTableArrival').css('visibility', "hidden");
        $('#containerTableDeparture').css('display', "block");
        $('#containerTableArrival').css('opacity', 0);
    }
});
