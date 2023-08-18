//========약관동의창 All버튼===========================
plzAgreeID.addEventListener('click',(e)=>{
    // console.log(e.target.id)
    console.log(e.target.checked)//체크값 TF로 확인 가능
    
    //모두 동의 누르면 전부 눌리게
    if(e.target.id=='checkAll'){
        agree1.checked =e.target.checked;
        agree2.checked =e.target.checked;
        agree3.checked =e.target.checked;
    }
    //다른거 모두 동의하면 모두동의 눌리게
    if(agree1.checked && agree2.checked && agree3.checked){
        checkAll.checked = true;
    }else{checkAll.checked = false;}
})
//========input창 조건 확인===========================
const elInput = document.querySelectorAll('input');

window.addEventListener('submit',function(e){
    e.preventDefault();
    let regPw = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;
    let regEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let regTel1 = /^\+\d{1,4}-\d{1,4}$/;
    let regTel2 = /^01([0|1|6|7|8|9])(\d{3,4})\d{4}$|^02-(\d{3,4})\d{4}$/;

    //이메일 확인
    if(!regEmail.test(elInput[0].value)){
        alert('이메일을 다시 입력해 주세요');
        return;
    }
    //비밀번호
    if(!regPw.test(elInput[3].value)){
        alert('패스워드를 다시 입력해 주세요');
        return
    }
    //비밀번호 확인
    if(elInput[3].value != elInput[4].value){
        alert('패스워드를 다시 입력해 주세요');
        return
    }
    //전화번호 확인(+82)
    if(!regTel1.test(elInput[5].value)){
        alert('국제전화 국가 번호를 다시 입력해 주세요');
        return;
    }
    //전화번호 확인
    if(!regTel2.test(elInput[6].value)){
        alert('전화번호를 다시 입력해 주세요');
        return;
    }
    //약관동의
    //인풋7은 all all만 체크되면 ㅇㅋ임
    //8910

    else{alert('가입을 축하합니다')}

    member.submit();//모든 조건이 맞으면 action값으로 이동
});