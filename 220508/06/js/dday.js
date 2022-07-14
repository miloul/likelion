var now = new Date();

var firstDay = new Date("2022-03-20");

var tonow = now.getTime();
var tofirst = firstDay.getTime();
var passedTime = tonow - tofirst;

var passedDay = Math.round(passedTime/(1000*60*60*24));
//console.log(passedDay);

document.querySelector('#accent').innerText = passedDay+"일";

function calculate(days) {
    var future = tofirst + days*(1000*60*60*24);
    var someday = new Date(future);
    //console.log(someday);

    var year = someday.getFullYear();
    var month = someday.getMonth() + 1;
    var date = someday.getDate();

    document.querySelector('#date'+days).innerText = year+"년 "+month+"월 "+date+"일"
}

calculate(100);
calculate(200);
calculate(365);
calculate(500);