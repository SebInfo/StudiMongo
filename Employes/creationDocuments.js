// Sélectionnez la base de données (ou créez-la si elle n'existe pas encore)
db = connect("test");

// Supprime la collection Employes si elle existe déjà pour éviter les doublons
db.Employes.drop();

// Insertion des documents dans la collection Employes
db.Employes.insertMany([
    {
        "nom": "Dupont",
        "prenom": "Jean",
        "poste": "Développeur",
        "experience": 5,
        "competences": ["JavaScript", "Node.js", "MongoDB"],
        "adresse": {
            "ville": "Paris",
            "codePostal": "75001",
            "rue": "12 Rue de Rivoli"
        }
    },
    {
        "nom": "Martin",
        "prenom": "Alice",
        "poste": "Chef de projet",
        "experience": 8,
        "competences": ["Gestion de projet", "Agile", "Scrum"],
        "adresse": {
            "ville": "Lyon",
            "codePostal": "69002"
        },
        "certifications": ["PMP", "Scrum Master"]
    },
    {
        "nom": "Nguyen",
        "prenom": "Sophie",
        "poste": "Designer",
        "experience": 4,
        "competences": ["Photoshop", "Illustrator", "UI/UX"],
        "adresse": {
            "ville": "Marseille",
            "codePostal": "13001",
            "rue": "15 Avenue du Prado"
        }
    },
    {
        "nom": "Durand",
        "prenom": "Pierre",
        "poste": "Administrateur Système",
        "experience": 10,
        "competences": ["Linux", "AWS", "Sécurité réseau"],
        "certifications": ["AWS Certified Solutions Architect", "Cisco CCNA"]
    },
    {
        "nom": "Bernard",
        "prenom": "Lucas",
        "poste": "Développeur",
        "experience": 2,
        "competences": ["JavaScript", "React"],
        "adresse": {
            "ville": "Nice",
            "codePostal": "06000"
        }
    },
    {
        "nom": "Dubois",
        "prenom": "Emma",
        "poste": "Designer",
        "competences": ["Photoshop", "Illustrator"],
        "adresse": {
            "ville": "Bordeaux",
            "codePostal": "33000",
            "rue": "22 Rue Sainte-Catherine"
        }
    },
    {
        "nom": "Moreau",
        "prenom": "Antoine",
        "poste": "Développeur",
        "experience": 3,
        "competences": ["Python", "Django", "Data Analysis"]
    },
    {
        "nom": "Lefevre",
        "prenom": "Marie",
        "poste": "Analyste",
        "experience": 6,
        "competences": ["SQL", "Python", "Data Analysis"],
        "certifications": ["Data Analyst Associate"]
    },
    {
        "nom": "Garcia",
        "prenom": "Thierry",
        "poste": "Technicien support",
        "experience": 1,
        "competences": ["Support technique", "Communication"]
    }
]);

print("Documents insérés avec succès dans la collection Employes");
