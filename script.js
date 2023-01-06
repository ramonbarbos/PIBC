


let h2 = document.querySelector('h2');
var map;

function success(pos){
    console.log(pos.coords.latitude, pos.coords.longitude);
    h2.textContent = `Informações de Vazamento em Salvador`;
    //h2.textContent = `Latitude: ${pos.coords.latitude}, Longitude: ${pos.coords.longitude}`;



    //Condição para mudar de posição sem dar erro
    if(map === undefined){
        map = L.map('map').setView([-12.9777125, -38.4713629], 15);

    }else{
        map.remove();
        map = L.map('map').setView([-12.9777125, -38.4713629], 15);

    }

    //Renderiza o mapa
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);


//geojeson data



    const geojsonMarkerOptions = {
        radius: 8,
        fillColor: "#ff7800",
        color: "#000",
        weight: 1,
        opacity: 1,
        fillOpacity: 0.8,
    };

    var dados = [{
        "type": "Feature",
        "properties": {
            "name": "Coors Field",
            "amenity": "Baseball Stadium",
            "popupContent": "This is where the Rockies play!"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-38.456569, -12.978306 ],
        }
    },
    {
        "type": "Feature",
        "properties": {
            "name": "Coors Field",
            "amenity": "Baseball Stadium",
            "popupContent": "This is where the Rockies play!"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-38.4544, -12.981777 ],
        }
    },
    {
        "type": "Feature",
        "properties": {
            "name": "Coors Field",
            "amenity": "Baseball Stadium",
            "popupContent": "This is where the Rockies play!"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-38.454432, -12.979646 ], 


        }
    },
    {
        "type": "Feature",
        "properties": {
            "name": "Coors Field",
            "amenity": "Baseball Stadium",
            "popupContent": "This is where the Rockies play!"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-38.451488, -12.979090 ], 


        }
    },
];

 
 
    //const markers = L.markerClusterGroup();

    L.geoJSON(dados, {
        pointToLayer: function (feature, latlng) {
           // return  markers.addLayer(L.circleMarker(latlng, geojsonMarkerOptions)) 
          return L.circleMarker(latlng, geojsonMarkerOptions)
          }

    }).addTo(map);

       // map.addLayer(markers);
    

}

function error(err){
    console.log(err);
}


var watchID = navigator.geolocation.watchPosition(success, error, {
    enableHighAccuracy:true,
    timeout: 5000
})


