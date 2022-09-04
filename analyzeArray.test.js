const analyzeArray =require('./analyzeArray')


test('Analyzeeeeeee', () =>{
   let numbers= [1,8,3,4,2,6];

let analyzed = {
  average: 4,
  min: 1,
  max: 8,
  length: 6
};
    
    expect(analyzeArray(numbers)).toEqual(analyzed)
})
