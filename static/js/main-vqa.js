jQuery(document).ready(function($) {
    var timezone = "Etc/GMT" ;
    var deadline = moment.tz("2020-05-10 23:59:59", timezone);
    $('#countdown-vqa').countdown(deadline.toDate(), function(event) {
        $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
    });
});
