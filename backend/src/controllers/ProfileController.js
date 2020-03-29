const connection = require("../database/conection");
module.exports = {
  // Retornar os casos especificos de uma ONG
  async index(req, res) {
    const ong_id = req.headers.authorization;

    const incidents = await connection("incidents")
      .where("ong_id", ong_id)
      .select("*");

    return res.json(incidents);
  }
};
