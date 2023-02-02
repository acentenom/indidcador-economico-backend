"use strict";

const indicatorsModule = require("../modules/indicatorsModule");

const indicatorsController = async (req, res) => {
  try {
    const indicators = await indicatorsModule();
    res.status(200).json(indicators);
  } catch (error) {
    res.status(error.status || 500).send({ error: error.message });
  }
};

module.exports = indicatorsController;
