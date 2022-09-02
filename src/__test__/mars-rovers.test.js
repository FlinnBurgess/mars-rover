const simulateMarsRovers = require('../mars-rovers')

const logSpy = jest.spyOn(console, 'log')

describe('Mars rovers', () => {
    it('should successfully coordinate a single rover', () => {
        const inputString = `4 8
        (1, 2, E) LFRFFRFRF`
        const expectedOutput = `(2, 2, W)`

        simulateMarsRovers(inputString)

        expect(logSpy).toHaveBeenCalledWith(expectedOutput)
    })

    it('should successfully coordinate multiple rovers', () => {
        const inputString = `4 8
        (0, 0, E) FLFRFF
        (3, 2, N) FFLFRF`
        const expectedOutput = `(3, 1, E)\n(2, 5, N)`

        simulateMarsRovers(inputString)

        expect(logSpy).toHaveBeenCalledWith(expectedOutput)
    })

    it('should mark rovers as LOST if they navigate past each edge of the grid', () => {
        const inputString = `1 1
        (0, 0, N) F
        (0, 0, E) F
        (0, 0, S) F
        (0, 0, W) F`
        const expectedOutput = `(0, 0, N) LOST\n(0, 0, E) LOST\n(0, 0, S) LOST\n(0, 0, W) LOST`

        simulateMarsRovers(inputString)

        expect(logSpy).toHaveBeenCalledWith(expectedOutput)
    })
})
