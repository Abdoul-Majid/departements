const mongoose = require('mongoose');
const csvtojson = require('csvtojson');
const fs = require('fs');

// Connexion à MongoDB
mongoose.connect('mongodb://localhost:27017/departements', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

// Définir le schéma et le modèle
const departementSchema = new mongoose.Schema({
  code_departement: String,
  nom_departement: String,
  code_region: String,
  nom_region : String
});

const Departement = mongoose.model('Departement', departementSchema);


async function getDepartementsByRegion(nomRegion) {
    try {
      const departements = await Departement.find({ nom_region: nomRegion });
      console.log(departements);
      return departements;
    } catch (err) {
      console.error('Error finding departements', err);
    }
}


// Lecture et conversion du fichier CSV
csvtojson()
  .fromFile('departements-france.csv')
  .then(async (jsonArray) => {
    try {
      await Departement.deleteMany({});

      // Insertion des nouveaux documents
      await Departement.insertMany(jsonArray);

      // Visualisation des données
      await getDepartementsByRegion('Hauts-de-France');

      // Fermeture de la connexion
      mongoose.connection.close();
    } catch (err) {
      console.error('Error inserting data into MongoDB', err);
    }
  })
  .catch(err => console.error('Error reading CSV file', err));
