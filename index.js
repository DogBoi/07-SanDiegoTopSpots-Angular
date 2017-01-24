window.initMap = function(){
var map = new google.maps.Map(document.getElementById('map'), {
	zoom: 8,
	center: {lat: 32.7157, lng: -117.1611}

});

var myTr; Spots

$.getJSON("topspots.json", function(data) {

$.each(data, function(index,value) {
	var maplink = 'https://www.google.com/maps?q=';
	maplink += value.location[0] +',' + value.location[1];


myTr += "<tr><td>" + value.name + "</td><td>" + value.description + "</td><td><a href=" + maplink + ">location</a></td></tr>";
var myLatLng = {lat: value.location[0], lng:value.location[1],};

var marker = new google.maps.Marker({
	position: { lat: value.location[0], lng: value.location[1] },
	map:map,

});
}) 
$('#myTable').append(myTr);
});
};