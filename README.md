# A mars rover simulator written in JavaScript

This program takes in information about an area of Mars and a number of different rovers, and tells you where on the grid each rover will end up.

## Requirements

-   [Node](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) (tested with node v18.7.0)

## Usage

-   From the project root, run `npm install` to install dependencies
-   Make sure that you have populated `src/input.txt` with whatever input you would like to run the program with
    -   The first line indicates the size of the grid and must have the format `X Y` where:
        -   `X` is an integer representing the width of the grid
        -   `Y` is an integer representing the height of the grid
    -   Subsequent lines represent the starting states of each rover and must have the format `(X, Y, O) <instructions>` where:
        -   `X`: integer representing the starting x coordinate of the rover, where `0` is the 1st square on the x-axis
        -   `Y`: integer representing the starting y coordinate of the rover, where `0` is the 1st square on the y-axis
        -   `O`: one of `[N, E, S, W]`, representing the starting orientation of the rover
        -   `<instructions>`: a string made up of `[F, L, R]`, where `F` represents moving the rover forward one square, `L` represents rotating the rover counter-clockwise by 90 degrees, and `R` represents rotating the rover clockwise by 90 degrees
    -   Alternatively you can supply a custom text file as input (see instructions below)
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
