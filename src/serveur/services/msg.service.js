const db = require('../shared-services/db-service')


const getMsg = () => {
  let qr = `select msg from news where datePub>='20221020' and status =1 and type='news'`;
  return new Promise((resolve, reject) => {
    db.query(qr, (err, result) => {
      err ? reject(err) : resolve(result);
    });
  });
};

module.exports = {getMsg }