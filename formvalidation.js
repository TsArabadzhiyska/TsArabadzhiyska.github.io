function Register(){

	var fname = document.getElementById('fname');
	var lname = document.getElementById('lname');
	var email = document.getElementById('email');
	var psw = document.getElementById('psw');
	var rpsw = document.getElementById('psw-repeat');
	var bday = document.getElementById('bdayday');
	var byear = document.getElementById('byear');
	var phone=document.getElementById('phone');

	var fnameError=document.getElementById('fname-error');
	var lnameError=document.getElementById('lname-error');
	var emailError=document.getElementById('email-error');
	var pswError=document.getElementById('psw-error');
	var rpswError=document.getElementById('rpsw-error');
	var dayError=document.getElementById('day-error');
	var yearError=document.getElementById('year-error');
	var phoneError=document.getElementById('phone-error');

	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	var bcolor="#fe5518a3";
	
 	var isValid=true;
	

	if(fname.value.length<3||fname==""||fname.value.match(/[0-9]/g)){
		fname.style.backgroundColor =bcolor;
		fnameError.innerHTML="The name is too short or contains number";
		isValid=false;
    }
	 else{
		fnameError.innerHTML="";
	} 
    if(lname.value.length<3||lname.value==""){
    	lname.style.backgroundColor = bcolor;
		lnameError.innerHTML="The name is too short";
		isValid=false;
    }
    else  if(lname.value.match(/[0-9]/g)){
    	lname.style.backgroundColor = bcolor;
		lnameError.innerHTML="The name is wrong.It can't contain numbers";
		isValid=false;
    }
    else{
		lnameError.innerHTML="";
	} 

    if(!email.value.match(mailformat)||email.value==""){
    	email.style.backgroundColor =bcolor;
		emailError.innerHTML="Invalid email";
		isValid=false;
    }
    else{
		emailError.innerHTML="";
	} 

	if(phone.value==""||phone.value.length!=10||!phone.value.match(/[0-9]/)||phone.value.match(/[a-zA-z!-.]/)){
    	phone.style.backgroundColor =bcolor;
		phoneError.innerHTML="Invalid phone number";
		isValid=false;
    }
    else{
		
		phoneError.innerHTML="";
	} 

	if(psw.value.length<6||psw.value==""){
		psw.style.backgroundColor = bcolor;
		
		pswError.innerHTML="Password is too weak or empty .You need minimum 6 symbols";
		isValid=false;
	} 

	else if(!psw.value.match(/[0-9]/g)){
		psw.style.backgroundColor = bcolor;
		pswError.innerHTML="Invalid password.Must have one number";
		isValid=false;
	}
	else if(!psw.value.match(/[A-Z]/g)){
		psw.style.backgroundColor = bcolor;
		pswError.innerHTML="Invalid password.Must have one upper case";
		isValid=false;
	}
	else if (rpsw.value!=psw.value) {
		rpsw.style.backgroundColor = bcolor;
		psw.style.backgroundColor = bcolor;
		rpswError.innerHTML="Not equal passwords";
		pswError.innerHTML="Not equal passwords";
		isValid=false;
	} 
	else{
		pswError.style.display="";
		rpswError.innerHTML="";

		rpsw.style.backgroundColor = "#F1F1F1";
		psw.style.backgroundColor = "#F1F1F1";
	}
	if (bday.value<=0||bday.value>31) {
		bday.style.backgroundColor = bcolor;
		dayError.innerHTML="Incorrect day!";
		isValid=false;
	}
	else{
		dayError.innerHTML="";
	} 
	if (byear.value<=1900||bdayday.value>2018) {
		byear.style.backgroundColor =bcolor;
		yearError.innerHTML="Incorrect year!";
		isValid=false;
	}
	else{
		yearError.innerHTML="";
	} 
	return isValid;
}
