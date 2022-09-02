#!/usr/bin/env node
const fs = require('fs')
const yargs = require('yargs')
const { hideBin } = require('yargs/helpers')
const simulateMarsRovers = require('./mars-rovers')
const options = yargs(hideBin(process.argv))
    .usage('Usage: --input <filename>')
    .option('input', {
        alias: 'i',
        describe: 'Input filename',
        type: 'string',
        demandOption: true,
    }).argv

const filename = options.input ?? 'input.txt'

fs.readFile(`${__dirname}/${filename}`, 'utf8', (err, data) => {
    if (err) {
        console.error(err)
        return
    }
    simulateMarsRovers(data)
})
