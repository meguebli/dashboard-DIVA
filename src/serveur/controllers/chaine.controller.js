const {getAllChaines,getAllChainesByGroupe,getAllEmployesByChaine,getAllEmployesByGroupeChaine,
  getNbrsArtsActif,getSumEmployes,getNbrsOfsActif,getAllPhase } = require("../services/chaine.service");
    
    getAllChaine = async (req, res) => {
      res.send(await getAllChaines());
    };
    getAllChaineByGroupe = async (req, res) => {
      let idGr=req.params['idGr'];
      res.send(await getAllChainesByGroupe(idGr));
    };
    getAllEmployeByChaine = async (req, res) => {
      let idCh=req.params['idCh'];
      res.send(await getAllEmployesByChaine(idCh));
    };
    getAllEmployeByGroupeChaine = async (req, res) => {
      let idGr=req.params['idGr'];
      res.send(await getAllEmployesByGroupeChaine(idGr));
    };
    getNbrsEmploye = async (req, res) => {
      
      res.send(await getSumEmployes());
    };
    getNbrsOfs = async (req, res) => {
      
      res.send(await getNbrsOfsActif(0));
    };
    getNbrsArs = async (req, res) => {
      
      res.send(await getNbrsArtsActif(0));
    };
    getAllPhases = async (req, res) => {
      
      res.send(await getAllPhase());
    };
  
//     const sumPanneController = async (req, res) => {
//       const sum = await sumPanneService()
//    res.status(200).send({sum})
    
//     };
    module.exports = {getAllChaine,getAllChaineByGroupe,getAllEmployeByChaine,
      getNbrsArs,getAllEmployeByGroupeChaine,getNbrsEmploye,getNbrsOfs,getAllPhases }