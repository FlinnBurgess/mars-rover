const extractSceneDetails = require('../input-utils')

const warnSpy = jest.spyOn(console, 'warn')

describe('Extracting scene details', () => {
    it('should return extracted scene details', () => {
        const [expectedGridWidth, expectedGridHeight] = [4, 5]
        const [
            expectedRoverX,
            expectedRoverY,
            expectedRoverOrientation,
            expectedRoverInstructions,
        ] = [1, 2, 'N', 'FFRFRFLF']
        const inputString = `${expectedGridWidth} ${expectedGridHeight}
        (${expectedRoverX}, ${expectedRoverY}, ${expectedRoverOrientation}) ${expectedRoverInstructions}`

        expect(extractSceneDetails(inputString)).toEqual({
            maxX: expectedGridWidth - 1,
            maxY: expectedGridHeight - 1,
            rovers: expect.arrayContaining([
                expect.objectContaining({
                    x: expectedRoverX,
                    y: expectedRoverY,
                    orientation: expectedRoverOrientation,
                    remainingInstructions: expectedRoverInstructions,
                }),
            ]),
        })
    })

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
        const invalidRoverDetails = '(bing, bong, wrong) LFRLFL'
        const inputString = `4 8
        (2, 3, E) LFRFF
        ${invalidRoverDetails}`

        const extractedSceneDetails = extractSceneDetails(inputString)
        expect(extractedSceneDetails.rovers).toHaveLength(1)
        expect(warnSpy).toHaveBeenCalledWith(
            `Invalid rover details found: ${invalidRoverDetails}`
        )
    })
})
