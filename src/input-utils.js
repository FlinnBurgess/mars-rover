function extractSceneDetails(inputText) {
    // find the index of the row in the text in the form "m n" where both are integers (assumption: m = width, n = height)
    // if no such row is found, throw a validation error
    // if one is found, parse it and remove it from the rows

    // Loop over the remaining rows, check that (after stripping out whitespace) they have the format "(X,Y,<bearing>)[LFR]+"
    // If a row does have that format, create a rover out of that information
    // If it doesn't, add the details to a list of malformed input strings
    // If there are no valid rover input strings, throw a validation error
    // If there are valid rover input strings, but also invalid ones, log a warning about the invalid strings

    // Return an object:
    return {
        xMax: 0,
        yMax: 0,
        rovers: [
            {x: 0, y: 0, remainingInstructions: 'LFFRFRFFL'},
            {x: 0, y: 0, remainingInstructions: 'LFFRFRFFL'},
            {x: 0, y: 0, remainingInstructions: 'LFFRFRFFL'},
        ]
    }
}

module.exports = extractSceneDetails