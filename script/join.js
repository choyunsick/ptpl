
function changePhone1(){
    const phone1 = document.getElementById("phone1").value 
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
      document.getElementById("sendMessage").focus();
      // document.getElementById("sendMessage").setAttribute("style","background-color:yellow;")
      // document.getElementById("sendMessage").disabled = false;
    }
}


    
    setTimeout(function() {
      alert("가입이 완료되었습니다 감사합니다.")
  },100000);         
  

