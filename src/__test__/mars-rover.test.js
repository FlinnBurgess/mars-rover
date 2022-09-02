const simulateMarsRovers = require('../mars-rover')

describe('Mars rovers', () => {
    it('should successfully coordinate a single rover', () => {
        const inputString = `4 8
        (2, 3, E) LFRFF`
    })

    it('should successfully coordinate multiple rovers', () => {})

    it('should mark rovers as LOST if they navigate past each edge of the grid', () => {
        const inputString = `1 1
        (0, 0, N) F
        (0, 0, E) F
        (0, 0, S) F
        (0, 0, W) F`
    })
})
