db = connect("test");

// Fonction pour supprimer un seul document avec deleteOne
function supprimerUnDocument(collection, filtre) {
    db[collection].deleteOne(filtre);
    print("Un document supprimé avec succès !");
}

// Fonction pour supprimer plusieurs documents avec deleteMany
function supprimerPlusieursDocuments(collection, filtre) {
    db[collection].deleteMany(filtre);
    print("Documents supprimés avec succès !");
}

// Fonction pour supprimer tous les documents de la collection
function supprimerTousLesDocuments(collection) {
    db[collection].deleteMany({});
    print("Tous les documents de la collection ont été supprimés avec succès !");
}

// Fonction pour supprimer un document spécifique par _id
function supprimerDocumentParId(collection, id) {
    db[collection].deleteOne({ "_id": ObjectId(id) });
    print("Document supprimé avec succès par _id !");
}

// Fonction pour supprimer la collection entière
function supprimerCollection(collection) {
    db[collection].drop();
    print("Collection supprimée avec succès !");
}

// Exemples d'utilisation des fonctions de suppression

// Suppression d'un seul document où le nom est "Dupont"
supprimerUnDocument("Employes", { "nom": "Dupont" });

// Suppression de tous les documents où le poste est "Développeur"
supprimerPlusieursDocuments("Employes", { "poste": "Développeur" });

// Suppression de tous les documents de la collection Employes
supprimerTousLesDocuments("Employes");

// Suppression d'un document par son _id
supprimerDocumentParId("Employes", "60d5f9a5b60f5b20e8d2b613");

// Suppression de la collection Employes
supprimerCollection("Employes");
