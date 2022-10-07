
let h2 = document.querySelector('h2');
var map;

function success(pos){
    console.log(pos.coords.latitude, pos.coords.longitude);
    h2.textContent = `Latitude: ${pos.coords.latitude}, Longitude: ${pos.coords.longitude}`;

    //Condição para mudar de posição sem dar erro
    if(map === undefined){
        map = L.map('map').setView([pos.coords.latitude, pos.coords.longitude], 15);

    }else{
        map.remove();
        map = L.map('map').setView([pos.coords.latitude, pos.coords.longitude], 15);

    }

    //Renderiza o mapa
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

    //Marcador do mapa
    var marker = L.marker([pos.coords.latitude, pos.coords.longitude]).addTo(map);
    var popup = marker.bindPopup('<b>Localização</b><br />Voce está aqui.');
    popup.openPopup();

}

function error(err){
    console.log(err);
}


var watchID = navigator.geolocation.watchPosition(success, error, {
    enableHighAccuracy:true,
    timeout: 5000
})


