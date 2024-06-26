var sql = require("../utils/db");

const countTrainer = (req, res) => {
    sql.query("SELECT COUNT(id_trainer) FROM Trainer", function (err, result) {
        if (err) throw err;
        res.send(result);
    });
};

const retrieveTrainer = (req, res) => {
  sql.query("SELECT * FROM Trainer", function (err, result) {
    if (err) throw err;
    res.send(result);
  });
};

const createTrainer = (req, res) => {
  sql.query(
    "INSERT INTO Trainer (id_trainer ,nome) values (?,?)",
    [req.body.nome],
    function (err, result) {
      if (err) throw err;
      res.send(req.body);
    }
  );
};

const retrieveTrainerbyID = (req, res) => {
  sql.query(
    "SELECT * FROM Trainer WHERE id_trainer = ?",
    [req.params.id_trainer],
    function (err, result) {
      if (err) throw err;
      res.send(result);
    }
  );
};

const deleteTrainer = (req, res) => {
  sql.query(
    "DELETE FROM Trainer WHERE id_trainer = ?",
    [req.params.id_trainer],
    function (err, result) {
      if (err) throw err;
      res.send("Trainer " + req.params.id + " successfully deleted");
    }
  );
};

const updateTrainer = (req, res) => {
  sql.query(
    "UPDATE Trainer SET nome = ? WHERE id_trainer = ?",
    [req.body.nome, req.params.id_trainer],
    function (err, result) {
      if (err) throw err;
      res.send(req.body);
    }
  );
};

module.exports = {countTrainer, retrieveTrainer, createTrainer, retrieveTrainerbyID, updateTrainer, deleteTrainer};