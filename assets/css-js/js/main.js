$(function () {
    var i = 0;
    $('table thead tr').prepend('<th>#</th>');
    $('table tbody tr').each(function () {
        i += 1;
        $(this).prepend('<td>' + i + '</td>');
    });
});