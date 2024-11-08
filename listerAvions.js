db = connect("Avions");
var avions = db.mesAvions.find( { longueur_m : { $exists : true }}, { _id :0 });
avions.forEach(function(avion) {
    printjson(avion);
})