let pow = (value) => {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
        resolve(value * value);
        }, 300);
    });

}


pow('2').then(function(resultado) {
    console.log(resultado);
    // expected output: "foo"
});
  
  console.log("processing ");
  // expected output: [object Promise]
  