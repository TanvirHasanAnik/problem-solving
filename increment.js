for (var i = 0; i < 6; i++) {
    setTimeout(() => console.log("var: "+i), 0);
}

for (var i = 0; i < 6; i++) {
    (function(i) {
        setTimeout(function() {
            console.log("iife: "+i);
        }, 0);
    })(i);
}

for (let i = 0; i < 6; i++) {
    setTimeout(() => console.log("let: "+i), 0);
}