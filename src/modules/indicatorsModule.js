"use strict";

const indicatorsService = require("../services/indicatorsService");

const indicatorsModule = async () => {
  try {
    const indicators = await indicatorsService();
    return Object.values(indicators).splice(3);
  } catch (error) {
    throw error;
  }
};

module.exports = indicatorsModule;
