function initMap() {
    // The location of Uluru
    const chicago = { lat: 41.881832, lng: -87.623177 };
    const losAngeles = { lat: 34.052235, lng: -118.243683 };
    const newYork = { lat: 43.000000, lng: -75.000000 };
    const center = { lat: 41.500000, lng: -100.000000 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 2.7,
      center: center,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: chicago,
      map: map,
    });
    const marker2 = new google.maps.Marker({
        position: losAngeles,
        map: map,
      });
      const marker3 = new google.maps.Marker({
        position: newYork,
        map: map,
      });
  }
  
  window.initMap = initMap;