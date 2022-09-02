#!/usr/bin/env node
const fs = require('fs')
const yargs = require('yargs')
const {hideBin} = require('yargs/helpers')

const options = yargs(hideBin(process.argv)).usage("Usage: -input <filename>")
    .option("input", {alias: "i", describe: "Input filename", type: "string", demandOption: true})
    .argv

function marsRover() {
    console.log('hello world')
}

module.exports = marsRover