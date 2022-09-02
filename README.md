# A mars rover simulator written in JavaScript

This program takes in information about an area of Mars and a number of different rovers, and tells you where on the grid each rover will end up.

## Requirements

-   [Node](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) (tested with node v18.7.0)

## Usage

-   From the project root, run `npm install` to install dependencies
-   Run `npm start`
    -   By default, the program will use `src/input.txt` as its input file
    -   To use a different file, place it in `src/<filename>` and run the command `node . --input filename` from the project root

## Tests

-   From the project root, run `npm install` to install dependencies
-   Run `npm test`

## Assumptions

-   Multiple rovers can occupy the same grid coordinates
-   A grid size input of `m n` implies a width of `m` and a height of `n`
-   A grid size input of `1 1` implies that there is only a single occupiable location with coordinates `0 0`

## Possible improvements / changes

-   Making the required input less rigid / more resilient. e.g. not enforcing grid size information to appear first, handling extra spaces between values
-   Not enabling rovers to occupy the same space
-   Warning when a rovers starting coordinates fall outside the bounds of the grid
-   Protect against a grid size of 0
-   Using TypeScript instead to aid with development process
