

function calculator(a,b){
    function add(){
        return a+b;
    }
    function subtract(){
        return a-b;
    }
    divide = () => {
        return a/b;
    }
    multiply =() => {
        return a*b;
    }


    return add(),subtract(),divide(),multiply();
}

module.exports=calculator;

