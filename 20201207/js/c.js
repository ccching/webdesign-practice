function calBMI(){
	var myBMI = 0;
	var height = document.getElementById("height").value;
	var weight = document.getElementById("weight").value;
	var description = "";

	myBMI = Math.round(weight/((height/100)**2));
		if (myBMI<18.5)
			description='體重過輕'
		else if (myBMI>=18.5 && myBMI<24)
			description="體重正常"
		else
			description="體重異常"
		document.getElementById('showBMI').innerHTML=myBMI+" "+description;

}
function clearBMI() {
	document.getElementById('showBMI').innerHTML="";
	document.getElementById('height').focus();
}