"use strict";

const { Router } = require('express');
const indicatorsController = require("../controllers/insdicatorsController")
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/indicadores", indicatorsController)

module.exports = router;
