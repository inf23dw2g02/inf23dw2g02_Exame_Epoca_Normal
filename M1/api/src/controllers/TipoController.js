var sql = require("../utils/db");

const retrieveTipo = (req, res) => {
  sql.query("SELECT * FROM Tipo", function (err, result) {
    if (err) throw err;
    res.send(result);
  });
};

const countTipo = (req, res) => {
  sql.query("SELECT COUNT(id_tipo) FROM Tipo", 
  function (err, result) {
      if (err) throw err;
      res.send(result);
  });
};

const createTipo = (req, res) => {
  sql.query(
    "INSERT INTO Tipo (nome) VALUES (?)",
    [
      req.body.nome,
    ],
    function (err, result) {
      if (err) throw err;
      res.send(req.body);
    }
  );
};

const retrieveTipobyID = (req, res) => {
    sql.query(
    "SELECT * FROM Tipo WHERE id_tipo = ?",
    [req.params.id_tipo],
    function (err, result) {
      if (err) throw err;
      res.send(result);
    }
  );
};

const deleteTipo = (req, res) => {
    sql.query(
    "DELETE FROM Tipo WHERE id_tipo = ?",
    [req.params.id_tipo],
    function (err, result) {
      if (err) throw err;
      res.send("Tipo " + req.params.id_tipo + " successfully deleted");
    }
  );
};

const updateTipobyID = (req, res) => {
  sql.query(
    "UPDATE Tipo SET nome = ? WHERE id_tipo = ?",
    [
      req.body.nome,
      req.params.id_tipo
    ],
    function (err, result) {
      if (err) throw err;
      res.send(req.body);
    }
  );
};

module.exports = {countTipo, retrieveTipo, retrieveTipobyID, deleteTipo, updateTipobyID, createTipo};

