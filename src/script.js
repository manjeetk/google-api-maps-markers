function initMap() {
    // Define map options - zoom level and center coordinates
    var options = {
        zoom: 4,
        center : {lat: -27.4705, lng: 153.0260}
    }

    // Create a new map object and specify the DOM element for display
    var map = new google.maps.Map(document.getElementById('map'), options);

    // Create a marker icon svg image
    const svgMarker = {
        path: "M10.453 14.016l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM12 2.016q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z",
        fillColor: "blue",
        fillOpacity: 0.6,
        strokeWeight: 0,
        rotation: 0,
        scale: 2,
        anchor: new google.maps.Point(15, 30),
      };

    // Create an array of locations with  different iconImages i.e, png image, svg image and no image (default icon) 
    var locations = [
        {
            coordinates: {lat: -27.4705, lng: 153.0260}, 
            iconImage: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
            content: '<h3>Brisbane</h3>'
        },
        {
            coordinates: {lat: -33.8688, lng: 151.2093},
            iconImage: svgMarker,
            content: '<h3>Sydney</h3>'
        },
        {
            coordinates: {lat: -37.8136, lng: 144.9631},
            content: '<h3>Melbourne</h3>'
        }
    ];

    // Loop through locations and add markers
    for (let i = 0; i < locations.length; i++) {
        //Add marker
        addMarker(locations[i]);
    }

    // Create a marker and set its position
    function addMarker(props) {
         // Create a marker and set its position along with marker title and content
        var marker = new google.maps.Marker({
            position: props.coordinates,
            map: map
        });
        
        // Check for custom icon
        if (props.iconImage) {
            // Set icon image
            marker.setIcon(props.iconImage);
        }
        // Check content
        if(props.content) {
            // Create an info window and set its content
            var infoWindow = new google.maps.InfoWindow({
                content: props.content
            });
        }

        // Add on click event listener to marker and open info window
        marker.addListener('click', function() {
            infoWindow.open(map, marker);
        });
    }
 
}