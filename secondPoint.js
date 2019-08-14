let pow = (value) => {
    return new Promise(function(resolve, reject) {
        let param1 = []
        setTimeout(function() {
            param1.push(value * value)
            param1.push(value)
            resolve(param1);
        }, (Math.random() * 1000));
    });

}
let count = 0
for (i= 0; i<10; i++) {

    pow(i).then(function(result) {
        console.log("processing ");
        console.log("the result is :" + result[0] );
        console.log("and the value was :" + result[1] + " * " + result[1] );

        if(count === 9) {
            console.log("Program terminated") }
        count++
    });

}

