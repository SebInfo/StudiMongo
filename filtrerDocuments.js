db = connect("BDperso");
var clients = db.clients.find( {nom: "Dupont"});
clients.forEach(function(client) {
    printjson(client);
})