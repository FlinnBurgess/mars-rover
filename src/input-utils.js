const validGridSizeRegex = /\d+ \d+/
const validRoverDetailsRegex = /\((\d+), (\d+), ([NESW])\) ([FLR]+)/

function extractSceneDetails(inputText) {
    const inputRows = inputText.split('\n')
    const gridSizeDetails = inputRows[0]
    if (!validGridSizeRegex.test(gridSizeDetails)) {
        throw new Error('No valid grid dimensions provided')
    }

    const [maxX, maxY] = gridSizeDetails
        .split(' ')
        .map((coord) => Number(coord) - 1)

    const rovers = []
    const roverDetails = inputRows.slice(1)

    roverDetails.forEach((roverDetailsItem) => {
        roverDetailsItem = roverDetailsItem.trim()
        if (!validRoverDetailsRegex.test(roverDetailsItem)) {
            console.warn(`Invalid rover details found: ${roverDetailsItem}`)
        } else {
            const regexResult = validRoverDetailsRegex.exec(roverDetailsItem)
            rovers.push({
                x: Number(regexResult[1]),
                y: Number(regexResult[2]),
                orientation: regexResult[3],
                remainingInstructions: regexResult[4],
            })
        }
    })

    if (rovers.length === 0) {
        throw new Error('No valid rover details provided')
    }

    return {
        maxX,
        maxY,
        rovers,
    }
}

module.exports = extractSceneDetails
