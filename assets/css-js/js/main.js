$(function () {
  $('[data-toggle="popover"]').popover()
})

$(function () {
    $('[id^="table"]').each(function () {
        var i = 0;
        var tableH = '#' + this.id + ' thead tr.numbered';
        var tableB = '#' + this.id + ' tbody tr.numbered';
        $(tableH).prepend('<th>#</th>');
        $(tableB).each(function () {
            i += 1;
            $(this).prepend('<td>' + i + '</td>');
        });
    });
});