const extractSceneDetails = require('./input-utils')

function simulateMarsRovers(inputString) {
    const { maxX, maxY, rovers } = extractSceneDetails(inputString)

    const moveRoverForward = (rover) => {
        switch (rover.orientation) {
            case 'N':
                if (rover.y === maxY) {
                    rover.lost = true
                    break
                }
                rover.y += 1
                break
            case 'E':
                if (rover.x === maxX) {
                    rover.lost = true
                    break
                }
                rover.x += 1
                break
            case 'S':
                if (rover.y === 0) {
                    rover.lost = true
                    break
                }
                rover.y -= 1
                break
            case 'W':
                if (rover.x === 0) {
                    rover.lost = true
                    break
                }
                rover.x -= 1
                break
        }
    }

    const orientations = ['N', 'E', 'S', 'W']

    const rotateRoverClockwise = (rover) => {
        const orientationIdx = orientations.indexOf(rover.orientation)
        rover.orientation = orientations[(orientationIdx + 1) % 4]
    }

    const rotateRoverCounterclockwise = (rover) => {
        const orientationIdx = orientations.indexOf(rover.orientation)
        // JS remainder doesn't handle negative numbers like modulo would, but an equivalent to -1 is +3
        rover.orientation = orientations[(orientationIdx + 3) % 4]
    }

    const executeRoverInstructions = (rover) => {
        while (rover.remainingInstructions.length > 0 && !rover.lost) {
            const instruction = rover.remainingInstructions[0]
            switch (instruction) {
                case 'F':
                    moveRoverForward(rover)
                    break
                case 'R':
                    rotateRoverClockwise(rover)
                    break
                case 'L':
                    rotateRoverCounterclockwise(rover)
            }

            rover.remainingInstructions = rover.remainingInstructions.slice(1)
        }
    }

    rovers.forEach((rover) => executeRoverInstructions(rover))

    console.log(
        rovers
            .map(
                (rover) =>
                    `(${rover.x}, ${rover.y}, ${rover.orientation})${
                        rover.lost ? ' LOST' : ''
                    }`
            )
            .join('\n')
    )
}

module.exports = simulateMarsRovers
