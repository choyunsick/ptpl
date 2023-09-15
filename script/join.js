
function changePhone1(){
    const phone1 = document.getElementById("phone1").value 
    console.log(typeof phone1);
    if(phone1.length === 3){
        document.getElementById("phone2").focus();
    }
}
function changePhone2(){
    const phone2 = document.getElementById("phone2").value 
    if(phone2.length === 4){
        document.getElementById("phone3").focus();
    }
}
function changePhone3(){
    const phone3 = document.getElementById("phone3").value 
    if(phone3.length === 4){
    }
}


    
//     setTimeout(function() {
//       alert("가입이 완료되었습니다 감사합니다.")
//   },1);         
  

