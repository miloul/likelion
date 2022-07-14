// 실습을 시작해 봅시다!
var count = 0;
var randomNumber = Math.floor(Math.random()*100)+1;

document.querySelector('#try').onkeypress = function(e){
    if (e.keycode == 13 || e.which == 13) {
        finding();
        return false;
    }
}

function finding(){
    var userNumber = document.querySelector('#try').value;
    if (userNumber>=1 && userNumber<=100){
        console.log(userNumber);
        
        if (userNumber<randomNumber){
            //console.log("up");
            document.querySelector('#display').innerHTML="Up!";
        }
        else if (userNumber>randomNumber){
            //console.log("down");
            document.querySelector('#display').innerHTML="Down!";
        }
        else{
            //console.log("it is match!");
            document.querySelector('#display').innerHTML="<span style='color:red'>정답!</span>";
        }
        document.querySelector('#try').value="";
        count++;
        document.querySelector('#counter').innerHTML="try : "+count;
    }
    else{
        alert("1과 100 사이의 숫자를 입력하세요");
    }
}