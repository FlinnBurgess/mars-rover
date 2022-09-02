const extractSceneDetails = require('../input-utils')

const warnSpy = jest.spyOn(console, 'warn')

describe('Extracting scene details', () => {
    it('should throw error if grid dimensions are missing', () => {
        const inputString = '(2, 3, E) LFRFF'

        expect(() => extractSceneDetails(inputString)).toThrow(
            'No valid grid dimensions provided'
        )
    })

    it('should throw error if no valid rover details are provided', () => {
        const inputString = `4 8
        (bing, bong, wrong) LFRLFL`
        expect(() => extractSceneDetails(inputString)).toThrow(
            'No valid rover details provided'
        )
    })

    it('should warn of any invalid rover details and return valid rovers', () => {
        // spyOn console.warn
        const invalidRoverDetails = '(bing, bong, wrong) LFRLFL'
        const inputString = `4 8
        (2, 3, E) LFRFF
        ${invalidRoverDetails}`
        // check that spy was called
    })
})
