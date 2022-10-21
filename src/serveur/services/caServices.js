const db = require('../shared-services/db-service')


const getCaService = () => {
  let qr = `select Groupe from groupechaine`;
  return new Promise((resolve, reject) => {
    db.query(qr, (err, result) => {
      err ? reject(err) : resolve(result);
    });
  });
};

// const sumPanneService =(id)=>{
//     let qr=`select sum (IDBonIntervention ) as sum from bonintervention `;
//     return new Promise((resolve, reject) => {
//       db.query(qr, (err, result) => {
//         err ? reject(err) : resolve(result);
//       });
//     });
//   }
// get All Chaines 
// get All Employes
// get OF encours
// get employées par chaine
// get 

module.exports = {getCaService }