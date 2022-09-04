

function analyzeArray(arr){

    const sum=arr.reduce((partialSum, a) => partialSum + a, 0);
   

    let analyzed = {
        average: sum/arr.length,
        min: Math.min.apply(Math, arr),
        max: Math.max.apply(Math, arr),
        length: arr.length
      };
    
    return analyzed;
}

module.exports=analyzeArray;

