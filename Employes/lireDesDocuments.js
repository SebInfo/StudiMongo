db = connect("test");

function lireTousLesDocuments(collection) {
    var documents = db[collection].find();
    documents.forEach(function(doc) {
        printjson(doc);
    });
}

function lireDocumentsAvecFiltre(collection, filtre) {
    var documents = db[collection].find(filtre);
    documents.forEach(function(doc) {
        printjson(doc);
    });
}

function afficherDocumentsAvecFiltresAvances(collection, filtreAvance) {
    var documents = db[collection].find(filtreAvance);
    documents.forEach(function(doc) {
        printjson(doc);
    });
}

function lireDocumentsAvecOperateursLogiques(collection, filtre) {
    var documents = db[collection].find(filtre);
    documents.forEach(function(doc) {
        printjson(doc);
    });
}

function lireDocumentsAvecRegex(collection, champ, motif) {
    var documents = db[collection].find({ [champ]: { $regex: motif } });
    documents.forEach(function(doc) {
        printjson(doc);
    });
}

function lirerDocumentsAvecTriEtLimite(collection, filtre, tri, limite) {
    var documents = db[collection].find(filtre).sort(tri).limit(limite);
    documents.forEach(function(doc) {
        printjson(doc);
    });
}

function lireDocumentsAvecExistenceChamp(collection, champ, existe) {
    var documents = db[collection].find({ [champ]: { $exists: existe } });
    documents.forEach(function(doc) {
        printjson(doc);
    });
}

// Utilisation : Affiche les employés qui ont un champ "adresse"
//lireDocumentsAvecExistenceChamp("Employes", "adresse", true);

// Utilisation : Affiche les 5 employés ayant "MongoDB" comme compétence, triés par expérience décroissante
//lireDocumentsAvecTriEtLimite("Employes", { "competences": "MongoDB" }, { "experience": -1 }, 5);

//lireDocumentsAvecFiltresAvances("Employes", { "experience": { $gt: 5 } });
//lireDocumentsAvecFiltre("Employes", { "competences": "MongoDB" });
//lireTousLesDocuments("Employes");

/*lireDocumentsAvecOperateursLogiques("Employes", {
    $or: [
        { "poste": "Développeur" },
        { "competences": "MongoDB" }
    ]
});*/

//lireDocumentsAvecRegex("Employes", "nom", "^Mar");

lireTousLesDocuments("Employes");