const express = require('express');
const router  = express.Router();
const auth = require('../middlewares/auth');
const passport = require('../middlewares/passport');

const DigimonController = require('../controllers/DigimonController');
const TrainerController = require('../controllers/TrainerController');
const BattleController = require('../controllers/BattleController');
const TipoController = require('../controllers/TipoController');
const TraineronTeamsController = require('../controllers/TraineronTeamsController');
const AuthController = require('../controllers/AuthController');


// ---------- DigimonController ----------

router.get('/Digimon/Count', DigimonController.countDigimon);
router.get('/Digimon', DigimonController.retrieveDigimon);
router.post('/Digimon', auth, DigimonController.createDigimon);

router.get('/Digimon/:id_digimon', DigimonController.retrieveDigimonbyID);
router.put('/Digimon/:id_digimon', auth, DigimonController.updateDigimon);
router.delete('/Digimon/:id_digimon', auth, DigimonController.deleteDigimon);

// ---------- TrainerController ----------

router.get('/Trainer/Count', TrainerController.countTrainer);
router.get('/Trainer', TrainerController.retrieveTrainer);
router.post('/Trainer', auth, TrainerController.createTrainer);

router.get('/Trainer/:id_trainer', TrainerController.retrieveTrainerbyID);
router.put('/Trainer/:id_trainer', auth, TrainerController.updateTrainer);
router.delete('/Trainer/:id_trainer', auth, TrainerController.deleteTrainer);

// ---------- BattleController ----------

router.get('/Battles/Count', BattleController.countBattle);
router.get('/Battles', BattleController.retrieveBattle);
router.post('/Battles', auth, BattleController.createBattle);

router.get('/Battles/:id_battle', BattleController.retrieveBattlebyID);
router.put('/Battles/:id_battle', auth, BattleController.updateBattlebyID);
router.delete('/Battles/:id_battle', auth, BattleController.deleteBattle);

// ---------- TipoController ----------

router.get('/Tipo/Count', TipoController.countTipo);
router.get('/Tipo', TipoController.retrieveTipo);
router.post('/Tipo', auth, TipoController.createTipo);

router.get('/Tipo/:id_tipo', TipoController.retrieveTipobyID);
router.put('/Tipo/:id_tipo', auth, TipoController.updateTipobyID);
router.delete('/Tipo/:id_tipo', auth, TipoController.deleteTipo);

// ---------- TraineronTeamsController ----------

router.get('/Trainer/:id/Team', TraineronTeamsController.retreiveTraineronTeams);

// ---------- AuthController ----------

router.get('/login', AuthController.login);
router.get('/logout', AuthController.logout);
router.get('/', auth, AuthController.protected);
router.get('/auth/github', passport.authenticate("github", { scope: ["user:email"] }), AuthController.authGitHub);
router.get('/auth/github/callback', passport.authenticate("github", { failureRedirect: "/login" }), AuthController.authCallback);
router.get('/me', auth, AuthController.me);
router.get('/githubme', auth, AuthController.gitHubMe);


module.exports = router;
