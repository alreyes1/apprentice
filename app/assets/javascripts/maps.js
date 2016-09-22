$(document).ready(function() {
   loadScript();
});

function loadScript() {
	console.log("map loading ...");
  var script = document.createElement('script');
  script.src = 'https://maps.googleapis.com/maps/api/js?'+
    '&key=AIzaSyDdYO6Xqe-ws4mL7dP-ggO4MfquwWf3JG4'+
    '&libraries=drawing'+
    '&callback=initialize';
  document.body.appendChild(script);
}

//Function to Drop Multiple Markers on the map ;
function initialize() {
  // Map Center
  var myLatLng = new google.maps.LatLng(33.742288, -84.391080);
  // General Options
  var mapOptions = {
    zoom: 9,
    center: myLatLng,
    panControl: true,
    draggable: true, // turn off if it gets annoying
    mapTypeId: google.maps.MapTypeId.RoadMap
  };
  var Coords = [
    [33.45115165, -84.47746155],
    [34.04145679, -84.06980447],
    [34.00760354, -84.4051481],
    [33.53919369, -84.35052343],

    [33.95864168, -84.32948201],
    [33.79360378, -84.81473035],
    [33.70175666, -84.60660806],
    [33.5215979, -84.50413673],

    [33.69909706, -84.27462307],
    [33.74774811, -83.91736953],

    [33.52923386, -84.24305287],
    [33.62046045, -84.70285972],

    [33.45741751, -84.55540285],
    [33.42088977, -84.43779553],
    [33.56626149, -84.54677069],
    [33.66982268, -83.95274439],

    [33.50702712, -84.26892156],
    [33.89089051, -83.96931076],
    [33.43759675, -84.42983867],
    [33.930818, -84.76277657],

    [33.70193685, -84.49773735],
    [34.09400592, -84.29731868],
    [33.34720493, -84.52194647],
    [34.16406974, -84.43854776]
  ];

  var map = new google.maps.Map(document.getElementById('map-canvas'),mapOptions);
  var infowindow = new google.maps.InfoWindow();
  var marker, i;

  for (i = 0; i < Coords.length; i++) {
   marker = new google.maps.Marker({
      position: new google.maps.LatLng(Coords[i][0], Coords[i][1]),
      map: map
    });
  }

}
