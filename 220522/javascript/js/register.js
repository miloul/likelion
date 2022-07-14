		var userId = document.querySelector("#user-id");  // ‘아이디’ 필드를 가져와 변수에 저장
		var pw1 = document.querySelector("#user-pw1");  // ‘비밀번호’ 필드를 가져와 변수에 저장
		var pw2 = document.querySelector("#user-pw2");  // ‘비밀번호 확인’ 필드를 가져와 변수에 저장

		userId.onchange = checkId;
		pw1.onchange = checkPw;
		pw2.onchange = comparePw;

		function checkId() {			
			if (userId.value.length < 4 || userId.value.length >15){
				alert("only 4~15");
				userId.select();
			}
		}

		function checkPw() {			
			if (pw1.value.length < 8){
				alert("password should be more than 8");
				pw1.value = "";
				pw1.focus();
			}
		}

		function comparePw() {						
			if (pw2.value != pw1.value){
				alert("this is different for password");
				pw2.value = "";
				pw2.focus();
			}
		}