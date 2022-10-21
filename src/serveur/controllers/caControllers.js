const {
    getCaService
    } = require("../services/caServices");
    
    getCaController = async (req, res) => {
      res.send(await getCaService());
    };
  
//     const sumPanneController = async (req, res) => {
//       const sum = await sumPanneService()
//    res.status(200).send({sum})
    
//     };
    module.exports = {getCaController}