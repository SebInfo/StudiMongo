db = connect("test");

// Fonction pour modifier un champ spécifique avec $set
function modifierChampAvecSet(collection, id, champ, nouvelleValeur) {
    db[collection].updateOne(
        { "_id": ObjectId(id) },
        { $set: { [champ]: nouvelleValeur } }
    );
    print("Champ modifié avec succès !");
}

// Fonction pour ajouter une compétence unique avec $addToSet
function ajouterCompetenceUnique(collection, id, competence) {
    db[collection].updateOne(
        { "_id": ObjectId(id) },
        { $addToSet: { "competences": competence } }
    );
    print("Compétence ajoutée (sans doublon) avec succès !");
}

// Fonction pour incrémenter une valeur numérique avec $inc
function incrementerValeur(collection, id, champ, increment) {
    db[collection].updateOne(
        { "_id": ObjectId(id) },
        { $inc: { [champ]: increment } }
    );
    print("Valeur incrémentée avec succès !");
}

// Fonction pour remplacer un document entier avec replaceOne
function remplacerDocument(collection, id, nouveauDocument) {
    db[collection].replaceOne(
        { "_id": ObjectId(id) },
        nouveauDocument
    );
    print("Document remplacé avec succès !");
}

// Fonction pour supprimer un champ spécifique avec $unset
function supprimerChamp(collection, id, champ) {
    db[collection].updateOne(
        { "_id": ObjectId(id) },
        { $unset: { [champ]: "" } }
    );
    print("Champ supprimé avec succès !");
}

// Fonction pour ajouter plusieurs compétences avec $push et $each
function ajouterCompetences(collection, id, competences) {
    db[collection].updateOne(
        { "_id": ObjectId(id) },
        { $push: { "competences": { $each: competences } } }
    );
    print("Compétences ajoutées avec succès !");
}

// Fonction pour mettre à jour un champ dans un tableau d'objets avec arrayFilters
function mettreAJourChampDansTableau(collection, id, nomProjet, nouveauStatut) {
    db[collection].updateOne(
        { "_id": ObjectId(id) },
        { $set: { "projets.$[elem].statut": nouveauStatut } },
        { arrayFilters: [{ "elem.nom": nomProjet }] }
    );
    print("Champ mis à jour dans le tableau avec succès !");
}

// Exemples d'utilisation des fonctions

// Modifier le poste d'un employé
//modifierChampAvecSet("Employes", "60d5f9a5b60f5b20e8d2b613", "poste", "Lead Développeur");

// Ajouter une compétence unique
//ajouterCompetenceUnique("Employes", "60d5f9a5b60f5b20e8d2b613", "Git");

// Incrémenter l'expérience d'un employé
//incrementerValeur("Employes", "60d5f9a5b60f5b20e8d2b613", "experience", 1);

// Remplacer un document entier
//remplacerDocument("Employes", "60d5f9a5b60f5b20e8d2b613", {
    "nom": "Garcia",
    "prenom": "Thierry",
    "poste": "Technicien Support Senior",
    "experience": 3,
    "competences": ["Support technique", "Communication", "Réseaux"]
});

// Supprimer le champ certifications
//supprimerChamp("Employes", "60d5f9a5b60f5b20e8d2b613", "certifications");

// Ajouter plusieurs compétences
//ajouterCompetences("Employes", "60d5f9a5b60f5b20e8d2b613", ["TypeScript", "Node.js"]);

// Mettre à jour un champ dans un tableau d'objets
//mettreAJourChampDansTableau("Employes", "60d5f9a5b60f5b20e8d2b613", "Projet A", "Terminé");
