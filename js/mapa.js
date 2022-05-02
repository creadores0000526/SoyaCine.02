
    var Lat =        13.6981068;
    var lon =        -89.1528154;
    mapboxgl.accessToken = 'pk.eyJ1IjoiZ2Vvcmdlc3YiLCJhIjoiY2wxamV2MWg1MWhhMDNqcDN5MWs3c3phMiJ9.orzptvSf7aJCeC76TAE7CA';
    var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [lon,Lat], // Posición inicial
    zoom: 13 // Zoom inicial
    });
    map.addControl(new mapboxgl.NavigationControl());
    map.addControl(new mapboxgl.FullscreenControl());
      map.on("load", function () {
         /* Image: An image is loaded and added to the map. */
         map.loadImage("https://i.imgur.com/MK4NUzI.png", function(error, image) {
             if (error) throw error;
             map.addImage("custom-marker", image);
             /* Style layer: A style layer ties together the source and image and specifies how they are displayed on the map. */
             map.addLayer({
               id: "markers",
               type: "symbol",
               /* Source: A data source specifies the geographic coordinate where the image marker gets placed. */
               source: {
                 type: "geojson",
                 data: {
                   type: 'FeatureCollection',
                   features: [
                     {
                       type: 'Feature',
                       properties: {},
                       geometry: {
                         type: "Point",
                         coordinates: [lon,Lat]
                       }
                     }
                   ]
                 }
               },
               layout: {
                 "icon-image": "custom-marker",
               }
             });
           });
        });