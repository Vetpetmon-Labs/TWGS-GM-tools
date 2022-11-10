// Start PRNG with ((M * N * J) / A)/R^2, where:
// M = System time (in miliseconds) modulated by 4945445
// N = System seconds
// J = System minutes * 2
// A = System hours
// R = Random number between 0.001 and 1
// System time is highly suggestive to the clock, and thus, it is impossible for a human being to calculate this formula. If seeds are changed with every run, results are absolutely impossible to predict, even by a human.
function createseed() {
    var d = new Date();
    
    var r =  Math.pow((Math.random() + 0.001),2);
    
    var m = (Date.now() %4945445);
    var n = (d.getSeconds());
    var j = (d.getMinutes()*2);
    var a = (d.getHours());
    
    var seed = Math.floor(((m*n*j)/a)/r);
    
    document.getElementById("seed").innerHTML = seed;
    document.getElementById("seedmanual").value = seed;
}