$('#environmentalStatsTitleBar img').click(function()
{
    if($(this).attr('src') === 'EnvironmentalStatistics/settingsIcon.png')
    {
        $(this).attr('src', 'EnvironmentalStatistics/thermostatIcon.png');
    }
    else
    {
        $(this).attr('src', 'EnvironmentalStatistics/settingsIcon.png');
    }

    $('#environmentalStatsContent').toggle();
    $('#environmentalStatsSettings').toggle();
});


function GetMonitorPollRateFromSettings($monitorUrl)
{
    //ajax get json here
    //supply dummy data for styling
    return '1';
}

function GetMonitorUnitFromSettings()
{
    //ajax get json here
    //supply dummy data for styling
    return "STUB";
}

function DisplayEnvironmentalMonitorSettings($pollingRate, $unit)
{

}

function PollEnvironmentalMonitor($monitorUrl, $unit)
{
    //ajax get json here
    //supply dummy data for styling
    DisplayEnvironmentalStatistics('18 C', '53%', '660 PPM');
}

function DisplayEnvironmentalStatistics($temp, $humidity, $co2)
{
    $('#environmentalStatsTemp var').text($temp);
    $('#environmentalStatsHumidity var').text($humidity);
    $('#environmentalStatsCO2 var').text($co2);
}

function LoadEnvironmentalMonitorFromSettings($monitorUrl)
{
    let $pollRate = GetMonitorPollRateFromSettings($monitorUrl);
    let $unit = GetMonitorUnitFromSettings($monitorUrl);
    DisplayEnvironmentalMonitorSettings('1', 'Celsius');

    PollEnvironmentalMonitor($monitorUrl, $unit);

    let $pollId = setInterval(function()
    {
        PollEnvironmentalMonitor($monitorUrl, $unit);
    }, $pollRate * 60000); //60000 is 1 minute in ms
}

$(document).ready(function()
{
    let $monitorUrl = 'localhost/fakeData.asp'; //dummy data
    LoadEnvironmentalMonitorFromSettings($monitorUrl);
});