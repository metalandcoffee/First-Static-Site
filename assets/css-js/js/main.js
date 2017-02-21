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

$("input").keypress(function(event) {
    if (event.which == 13) {
        event.preventDefault();
        $("form").submit();
    }
});

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});