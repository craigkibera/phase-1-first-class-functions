function receivesAFunction(callback) {
    callback ();
}
function  returnsANamedFunction(){
    function namedFunction() {
        console.log("I am named function");
    }
    return namedFunction;
}
function  returnsAnAnonymousFunction(){
    return function () {
        console.log("I am anonymous functional");
    };
}

module.exports = {
    receivesAFunction,
    returnsANamedFunction,
    returnsAnAnonymousFunction,

};