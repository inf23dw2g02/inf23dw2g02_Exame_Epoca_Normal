var sql = require("../utils/db");


const retreiveTraineronTeams = (req, res) => {
  var sqlQuery = "SELECT * FROM Trainer WHERE Trainer.id_Trainer = (SELECT id_trainer FROM Teams WHERE Teams.id_teams = ?)";
  sql.query(sqlQuery, [req.params.id_teams], function (err, result) {
    if (err) throw err;
    res.send(result);
  });
}

module.exports = {retreiveTraineronTeams};