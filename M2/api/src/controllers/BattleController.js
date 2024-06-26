var sql = require("../utils/db");

const countBattle = (req, res) => {
    sql.query("SELECT COUNT(id_battle) FROM Battles", function (err, result) {
        if (err) throw err;
        res.send(result);
    });
};

const retrieveBattle = (req, res) => {
  sql.query("SELECT * FROM Battles", function (err, result) {
    if (err) throw err;
    res.send(result);
  });
};

const createBattle = (req, res) => {
  sql.query(
    "INSERT INTO Battles (id_trainer1, id_trainer2, id_digimon1, id_digimon2, location, winner) VALUES (?,?,?,?,?,?)",
    [
      req.body.id_trainer1,
      req.body.id_trainer2,
      req.body.id_digimon1,
      req.body.id_digimon2, 
      req.body.location, 
      req.body.winner
    ],
    function (err, result) {
      if (err) throw err;
      res.send(req.body);
    }
  );
};

const retrieveBattlebyID = (req, res) => {
    sql.query(
    "SELECT * FROM Battles WHERE id_battle = ?",
    [req.params.id_battle],
    function (err, result) {
      if (err) throw err;
      res.send(result);
    }
  );
};

const deleteBattle = (req, res) => {
    sql.query(
    "DELETE FROM Battles WHERE id_battle = ?",
    [req.params.id_battle],
    function (err, result) {
      if (err) throw err;
      res.send("Battle " + req.params.id_battle + " successfully deleted, You coward");
    }
  );
};

const updateBattlebyID = (req, res) => {
  sql.query(
    "UPDATE Battles SET id_trainer1 = ?, id_trainer2 = ?, id_digimon1 = ?, id_digimon2 = ?, location = ?, winner = ? WHERE id_battle = ?",
    [
      req.body.id_trainer1,
      req.body.id_trainer2,
      req.body.id_digimon1,
      req.body.id_digimon2, 
      req.body.location, 
      req.body.winner,
      req.params.id_battle
    ],
    function (err, result) {
      if (err) throw err;
      res.send(req.body);
    }
  );
};

module.exports = {countBattle, retrieveBattle, retrieveBattlebyID, deleteBattle, updateBattlebyID, createBattle};

