//Popovers must be initialized with jQuery: select the specified element and call the popover() method.
//The following code will enable all popovers in the document:
$(function () {
  $('[data-toggle="popover"]').popover()
})

//The following code will automatically number each table that has an id that begins with "table".
$(function () {
    $('table[id^="table"]').each(function () {
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


//For popover search form, this function with submit the form on enter
$("input").keypress(function(event) {
    if (event.which == 13) {
        event.preventDefault();
        $("form").submit();
    }
});

//Slow scroll on index.html
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
