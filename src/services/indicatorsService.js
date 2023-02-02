"use strict";

const axios = require("axios");

const indicatorsService = async () => {
  try {
    const { data: indicators } = await axios("https://mindicador.cl/api");
    return indicators;
  } catch (error) {
		throw error;
	}
};

module.exports = indicatorsService;
