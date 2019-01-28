jQuery(document).ready(function($) {
    var timezone = "Etc/GMT" ;
    var deadline = moment.tz("2019-05-18 23:59:59", timezone);
    $('#countdown-visdial').countdown(deadline.toDate(), function(event) {
        $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
    });
});