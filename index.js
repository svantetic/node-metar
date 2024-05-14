#!/usr/bin/env node 

const { program } = require('commander');
const { getMetar } = require('./api.js');

program
  .name('node-metar')
  .description(
    'Get metar for given ICAO airport code from VATSIM. For simulation use only'
  )
  .version('1.0.0');

program.argument('<icao>', 'icao').action(async (str, _options) => {
  const metar = await getMetar(str);
  console.log(metar);
  return metar;
});

program.parse();
