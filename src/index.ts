#! /usr/bin/env node

const program = require('commander');
const generators = require('./generator');


program.command('init <name>').action(function(name: string) {
  generators('app', name);
});
program.command('g').action(function() {
  generators('generator', 'create');
});
program
  .command('clean')
  .alias('c')
  .action(function() {
    generators('clean');
  });
program
  .command('create <name>')
  .alias('cc')
  .action(function(name: string) {
    generators('create', name);
  });
program.parse(process.argv);
