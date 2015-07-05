$( document ).ready(function() {
 
    getMonth = function (v) {
        var n = ["", "Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
        return n[v];
    };

    var dateToday = new Date(),
        dateString = dateToday.getFullYear() + "-" + (dateToday.getMonth()+1) + "-" + dateToday.getDate(),
        urlReps = "https://reps.mozilla.org/api/v1/event/?offset=0&limit=0&start__gte=" + dateString + "&query=Colombia";

    var html = "<div class='featured-event'>\
                  <span class='res_icon'>\
                    <a rel='external' class='date-large'> \
                        <span class='calendar-month'></span> <br> \
                        <span class='calendar-day'></span> <br> \
                        <span class='calendar-year'></span> \
                    </a> \
                  </span> \
                <div class='event-detail'> \
                  <a rel='external'> \
                    <h2></h2> \
                  </a> \
                    <p class='event-info l-ocation'></p> \
                </div> \
              </div>"
              
    var yearRegexp = /\d{4}\-\d{1,2}\-\d{1,2}/;
    
    $.ajax({
      method: "POST",
      type: "POST",
      dataType: "jsonp",
      crossDomain: true,
      url: urlReps
    }).done(function( data ) {
          $.each( data.objects, function( i, item ) {
            var dateSplit = yearRegexp.exec(item.local_start);
            var convert = String(dateSplit);
            var finalDate = convert.split("-");
            $('body').append(html);
            $('.date-large').attr('href', item.event_url);
            $('.event-detail a').attr('href', item.event_url);
            $('.res_icon .calendar-month').text(getMonth(finalDate[1]));
            $('.res_icon .calendar-day').text(finalDate[2]);
            $('.res_icon .calendar-year').text(finalDate[0]);
            $('.event-detail h2').text(item.name);
            $('.event-info').text(item.description);
          });
    });
 
});
