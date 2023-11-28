describe('Tests for BlackJack Game', () => {
    it('should calculate the score of a hand', () => {
        const hand =[
            { suit: 'Six', val: 6 ,  displayVal:'hearts' },
            { suit: 'Seven', val: 7 ,  displayVal:'hearts' }
        ]
        const result = calcPoints(hand)
        expect(result.total).toEqual(13)
        expect(result.isSoft).toEqual(false)
    })
})

describe ('Test for the Soccer Game', () =>{
    describe('get total points', () =>{
        it('should return a acurate total score for a string input', () => {
            const result = getTotalPoints('wwdlw')
            expect(result).toEqual(10)
        })
    })
})