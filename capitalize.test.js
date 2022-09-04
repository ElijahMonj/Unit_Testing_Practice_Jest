const capitalize =require('./capitalize')


test('Capitalize string', () =>{
    
    expect(capitalize("hello world")).toBe("HELLO WORLD")
})
