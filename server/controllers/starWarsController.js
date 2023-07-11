const models = require('../models/starWarsModels');
const {Person, Species} = require('../models/starWarsModels');


const starWarsController = {};

starWarsController.getCharacters = (req, res, next) => {
  models.Person.find({})

    .then((result) => res.locals = result)

    .catch((err) => console.log(err.message));


  next();
};

// starWarsController.getCharacters = async (req, res, next) => {
//   try {
//     const people = await Person.find({}); // Retrieve all documents from the 'people' collection

//     res.locals.characters = people; // Store the retrieved characters in res.locals

//     next();
//   } catch (err) {
//     next(err);
//   }
// };

starWarsController.getSpecies = (req, res, next) => {
  // write code here

  next();
};

starWarsController.getHomeworld = (req, res, next) => {
  // write code here

  next();
};

starWarsController.getFilm = (req, res, next) => {
  // write code here

  next();
};

starWarsController.addCharacter = (req, res, next) => {
  // write code here

  next();
};

module.exports = starWarsController;
