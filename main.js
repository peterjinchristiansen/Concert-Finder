var BTapiUrl = 'https://rest.bandsintown.com/artists/' //bandsintown artists/[artist name]/events?app_id=
var BTapiKey = '/events?app_id=codingbootcamp'


var YTapiUrl = "https://youtube.googleapis.com/youtube/v3/search?type=video&part=snippet&maxResults=1&q="
var YTapiKey = "&key=AIzaSyCbfLWENG7Xt-bGvusj8DNP7usCXXeF1XM"

var video = ''

$('#find').on('click', function(event) {
    var search = $('#search').val()
    event.preventDefault()
    
    fetch(BTapiUrl + search + BTapiKey)
    .then(data => data.json())
    .then(result => {
        // NEED A LOOP TO ITERATE
        $('#name').text(result[0].artist.name)
        $('#image').attr('src', result[0].artist.thumb_url)
        $('#dateTime').text(result[0].datetime)
        $('#venue').text(result[0].venue.name)
        $('#location').text(result[0].venue.location)
        $('#purchase').attr('href', results[0].offers[0].url)
        console.log(result);
    })
    
    fetch(YTapiUrl + search + YTapiKey)
    .then(data => data.json())
    .then(result => {
        console.log(result);
    
        result.items.forEach(item => {
            video = 
            `
            <iframe width="480" height="275" src="http://www.youtube.com/embed/${item.id.videoId}" frameborder="0" allowfullscreen></iframe>
            `
            $('#player').append(video);
        })
    })


})
