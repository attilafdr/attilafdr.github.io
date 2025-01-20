function createMap(gpxFilePath) {
    // Initialize the map
    var map = L.map('map').setView([51.505, -0.09], 13);

    // Add a tile layer to the map
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Load and display the GPX file
    new L.GPX(gpxFilePath, {
        async: true
    }).on('loaded', function(e) {
        map.fitBounds(e.target.getBounds());
    }).addTo(map);
}

// Export the function to make it available for import
export { createMap };