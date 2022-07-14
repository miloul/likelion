
function plus() {
    var1 = document.getElementById('numPlus1').value;
    var2 = document.getElementById('numPlus2').value;

    var result = parseInt(var1)+parseInt(var2);
    console.log(result);
    document.getElementById('printPlus').innerText=result;
}

function minus() {
    var1 = document.getElementById('numMinus1').value;
    var2 = document.getElementById('numMinus2').value;

    var result = parseInt(var1)-parseInt(var2);
    document.getElementById('printMinus').innerText=result;
}