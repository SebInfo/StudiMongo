db = db.getSiblingDB('mydb');
/*var client1 = {
    nom : "Sarrion",
    prenom : "Marc"
};

db.clients.insert(client1);

var dbs = db.adminCommand("listDatabases");
print("\nApres insertion d'un document");
printjson(dbs);*/

/*var clients = db.clients.find();
clients.forEach(function(client) {
    printjson(client);
})*/

var clients = db.clients.find({ nom : { $in : ["Sarrion", "Rails"]}});
clients.forEach(function(client) {
    printjson(client);
})
