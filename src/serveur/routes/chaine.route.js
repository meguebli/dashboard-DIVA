const {getAllChaine,getAllChaineByGroupe,getAllEmployeByChaine,getAllEmployeByGroupeChaine,getNbrsEmploye } = require('../controllers/chaine.controller');

const express = require ('express');


const chaineRoute = express.Router();

chaineRoute.get('/',getAllChaine);
chaineRoute.get('/:idGr',getAllChaineByGroupe);
chaineRoute.get('/employe/nb',getNbrsEmploye);
chaineRoute.get('/employe/:idCh',getAllEmployeByChaine);
chaineRoute.get('/employe/groupe/:idGr',getAllEmployeByGroupeChaine);


module.exports = chaineRoute