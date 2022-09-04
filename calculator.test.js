const calculator =require('./calculator')


test('calculate numbers', () =>{
    
    expect(calculator(2,5)).toBe((2+5)&&(2-5)&&(2/5)&&(2*5))
})
