$(document).ready(function(){
    $('#environmentalStatsPortlet').load("EnvironmentalStatistics/environmentalStatsPortlet.inc.html");
});

$('.room h5').click(function ()
{
    alert('before');
    let $x = $(this ).children('h5').val();
    alert($x);
});