import CLIENT_ID from "./key.js" //exports a constant with the mapbox access-token
const mymap = L.map('mapid').setView([56.2, 11.089188], 7);
const mapLink =
    '<a href="http://openstreetmap.org">OpenStreetMap</a>';


L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 19,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: CLIENT_ID
}).addTo(mymap);


var haderslev = L.marker([55.25377, 9.48982]).addTo(mymap);
var barsoe = L.marker([55.123413, 9.559145]).addTo(mymap);
var soroe = L.marker([55.43184, 11.55547]).addTo(mymap);
var home = L.marker([55.70505972958517, 12.586670572856995]).addTo(mymap);

haderslev.bindPopup("<b>Hello world!</b><br>I am a popup.")
soroe.bindPopup("<b>Sorø</b><br>Sorø Akademi.")
home.bindPopup("<b>Her bor vi!</b><br>Strandboulevarden 73.")