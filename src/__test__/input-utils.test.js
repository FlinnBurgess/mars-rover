const extractSceneDetails = require('../input-utils')

const warnSpy = jest.spyOn(console, 'warn')

describe('Extracting scene details', () => {
    it('should throw error if grid dimensions are missing', () => {
        const inputString = '(2, 3, E) LFRFF'

        expect(extractSceneDetails(inputString)).toThrow(
            'No valid grid dimensions provided'
        )
    })

    it('should throw error if no valid rover details are provided', () => {
        const inputString = `4 8
        (bing, bong, wrong) LFRLFL`
        expect(extractSceneDetails(inputString)).toThrow(
            'No valid rover details provided'
        )
    })

    it('should successfully coordinate a single rover', () => {
        const inputString = `4 8
        (2, 3, E) LFRFF`
    })

    it('should successfully coordinate multiple rovers', () => {})

    it('should warn of any invalid rover details and coordinate valid rovers', () => {
        // spyOn console.warn
        const invalidRoverDetails = '(bing, bong, wrong) LFRLFL'
        const inputString = `4 8
        (2, 3, E) LFRFF
        ${invalidRoverDetails}`
        // check that spy was called
    })

    it('should mark rovers as LOST if they navigate past each edge of the grid', () => {
        const inputString = `1 1
        (0, 0, N) F
        (0, 0, E) F
        (0, 0, S) F
        (0, 0, W) F`
    })
})
