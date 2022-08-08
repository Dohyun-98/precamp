
//휴대폰 번호 입력칸
//첫번째 칸에서 3자리 입력시, 둘째칸으로 포커스를 옮기는 함수
const focus1 = () => {
    let p1 = document.getElementById("ph1").value;
    if (p1.length === 3) {
        document.getElementById("ph2").focus();
    }
}

const focus2 = () => {
    let p2 = document.getElementById("ph2").value;
    if (p2.length === 4) {
        document.getElementById("ph3").focus();
    }
}


const focus3 = () => {
    let p3 = document.getElementById("ph3").value;
    if (p3.length === 4) {
        document.getElementById("js-cabutton1").disabled = false;
        document.getElementById("js-cabutton1").style = "color : white; background-color : #0068ff ; "
    } else {
        document.getElementById("js-cabutton1").disabled = true;
        document.getElementById("js-cabutton1").style = "color : #0068ff ; background-color : white ;"
    }


}

//인증번호 버튼 클릭시 토큰 생성 및 타이머 활성화 + 인증버튼 확인 활성화
let active = false;
let time = 3;
const cabutton1 = () => {
    if (active === false) {   //  함수가 활성화 되어 있지 않을 경우 실행
        active = true;
        let number = String(Math.floor(Math.random() * 1000000)).padStart(0, 6);
        document.getElementById("js-canum1").innerText = number;
        const timer = setInterval(() => {
            if (time >= 0) {   // 시간이 양수일때
                let min = Math.floor(time / 60);
                let sec = String(time % 60).padStart(2, "0")
                document.getElementById("js-canum2").innerText = min + ":" + sec
                time = time - 1;
                console.log(time)
                document.getElementById("js-cabutton2").disabled = false;
                document.getElementById("js-cabutton2").style = "color : white; background-color : #0068ff ;";
            } else {  // 시간이 음수 일때
                document.getElementById("js-cabutton2").disabled = true;
                document.getElementById("js-cabutton2").style = "color : #0068ff ; background-color : white ;";
                clearInterval(timer);
                time = 3;
            }

        }, 1000);
    } else {   //함수가 활성화되어 있을 때 
        return ;
    }


}



const authsuccess = () => {
    alert('인증이 완료되었습니다.');
    document.getElementById("js-cabutton2").disabled = true;
    document.getElementById("js-cabutton2").style = "color : #0068ff ; background-color : white ;"
    document.getElementById("js-cabutton2").innerText = "인증완료";
    time = 0;
    document.getElementById("js-canum1").innerText = "000000";
    document.getElementById("js-canum2").innerText = "3:00";
    document.getElementById("signupbutton").disabled = false;
    document.getElementById("signupbutton").style = "color : white; background-color : #0068ff ;";
}


// 가입 버튼 클릭시
const checkemail = (email) => {
    if (email !== null) {  // null이 아닐때 
        if (typeof(email) == 'string') {
            if (email.includes("@")) {
                console.log("email true;")
                return true;
            } else {
                return false;
            }
        }
    } else {
        return false;
    }
}

const checkpw = (pw1, pw2) => {

    if (pw1 === null) {
        //에러 메시지 호출 하고 return false
        return false;
    } else if (pw2 === null) {
        return false;
    } else if (pw1 === pw2) {
        console.log("pw true;")
        return true;
    } else {
        return false;
        //패스워드가 다르다는 메시지 호출
    }


}

const checkname = (name) => {
    if (name !== null) {
        console.log("name true;")
        return true;
    } else {
        return false;
    }
}

const checkarea = (area) => {
    if (area !== null) {
        console.log("area true;")
        return true;
    } else {
        return false;
    }
}

const checkgender = (gender) => {
    if (gender !== null) {
        console.log("gender true;")
        return true;
    } else {
        return false;
    }
}
//활성화테스트용 함수
const alerttest = () => {
    alert('SSS');
}

const checkValidation = () => {
    let email = document.getElementById("email").value
    let name = document.getElementById("name").value
    let pw1 = document.getElementById("pw1").value
    let pw2 = document.getElementById("pw2").value
    let area = document.getElementById("area").value
    let genderlist = document.getElementsByName("gender")
    let gender;
    for(let i=0;i<genderlist.length;i++){
        if(genderlist[i].checked){
            gender = genderlist[i]
        }
    }
    


    let ckemail = checkemail(email);
    let ckname = checkname(name);
    let ckpw = checkpw(pw1, pw2);
    let ckarea = checkarea(area);
    let ckgender = checkgender(gender.value);

    if (ckemail && ckname && ckpw && ckarea && ckgender) {
        alert("가입완료")
    }
}