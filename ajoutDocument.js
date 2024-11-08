db = connect("BDperso");

var client = {
    nom : "INION",
    prenom : "Sébastien"
};

db.clients.insertOne(client);