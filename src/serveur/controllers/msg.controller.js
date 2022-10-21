const {
    getMsg
    } = require("../services/msg.service");
    
    getMsgController = async (req, res) => {
      res.send(await getMsg());
    };
  
//     const sumPanneController = async (req, res) => {
//       const sum = await sumPanneService()
//    res.status(200).send({sum})
    
//     };
    module.exports = {getMsgController}