$(function () {     
    var i = 0;
    $('table thead tr.numbered').prepend('<th>#</th>');
    $('table tbody tr.numbered').each(function () {
        i += 1;
        $(this).prepend('<td>' + i + '</td>');
    });

});