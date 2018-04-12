let fs = require('fs'); 
let _ = require('lodash');
let centroids = require('./src/data/centroids.json');
let multipolygons = require('./src/data/multipolygons.json');

// console.log(_.map);

// console.log(centroids);
// console.log(multipolygons);


_.map(multipolygons.features, (multipolygon) => {
    let multipolygonName = multipolygon.properties.name.replace().toLowerCase();

    _.map(centroids, (centroid) => {
        if (multipolygonName === centroid.name.replace().toLowerCase()) {
            multipolygon.geometry.center = [centroid.longitude, centroid.latitude];
        }
    })

    console.log(multipolygon.geometry.center);
})








let content = JSON.stringify(multipolygons);

fs.appendFile("combined.json", content, 'utf8', function(err) {
    if (err) {
        return console.log(err);
    }

    console.log("The file was saved!");
}); 