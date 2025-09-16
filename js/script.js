function initMap() {
  // Coordenadas en decimal: 11°55'33.8"S 77°03'37.6"W
  const ubicacion = { lat: -11.926056, lng: -77.060444 };

  // Crear el mapa centrado en la empresa
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 16,
    center: ubicacion,
  });

  // Agregar un marcador
  new google.maps.Marker({
    position: ubicacion,
    map: map,
    title: "Mi Empresa",
  });
}
