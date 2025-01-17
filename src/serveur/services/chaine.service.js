const db = require('../shared-services/db-service')


const getAllChaines = () => {
  let qr = `select *,count(*) as NbCh from chainemontage`;
  return new Promise((resolve, reject) => {
    db.query(qr, (err, result) => {
      err ? reject(err) : resolve(result);
    });
  });
};
const getAllChainesByGroupe = (idGr) => {
  let qr = `select * from chainemontage where IDGroupe=${idGr}`;
  return new Promise((resolve, reject) => {
    db.query(qr, (err, result) => {
      err ? reject(err) : resolve(result);
    });
  });
};
const getAllEmployesByChaine = (idCh) => {
    let qr = `select * from employe where IDChaineMontage=${idCh}`;
    return new Promise((resolve, reject) => {
      db.query(qr, (err, result) => {
        err ? reject(err) : resolve(result);
      });
    });
  };
  const getAllEmployesByGroupeChaine = (idGr) => {
    let qr = `select E.* from employe E, chainemontage C where E.IDChaineMontage=C.IDChaineMontage and C.IDGroupe=${idGr}`;
    return new Promise((resolve, reject) => {
      db.query(qr, (err, result) => {
        
        err ? reject(err) : resolve(result);
      });
    });
  };
  const getSumEmployes = () => {
    let qr = `select COUNT(*) as NbEmp from employe`;
    return new Promise((resolve, reject) => {
      db.query(qr, (err, result) => {
        
        err ? reject(err) : resolve(result);
      });
    });
  };
  const getNbrsOfsActif = (nb) => {
    let qr = `SELECT count(*) as NbOf FROM ofabrication where etat =0;`;
    return new Promise((resolve, reject) => {
      db.query(qr, (err, result) => {
        
        err ? reject(err) : resolve(result);
      });
    });
  };
  const getNbrsArtsActif = (nb) => {
    let qr = `SELECT count(*) as NbAr FROM article where etat =1;`;
    return new Promise((resolve, reject) => {
      db.query(qr, (err, result) => {
        
        err ? reject(err) : resolve(result);
      });
    });
  };
  const getAllPhase = (nb) => {
    let qr = `SELECT * FROM phase;`;
    return new Promise((resolve, reject) => {
      db.query(qr, (err, result) => {
        
        err ? reject(err) : resolve(result);
      });
    });
  };
module.exports = {getAllChaines,getAllChainesByGroupe,getAllEmployesByChaine,getAllEmployesByGroupeChaine,getSumEmployes ,
  getNbrsOfsActif,getNbrsArtsActif,getAllPhase}