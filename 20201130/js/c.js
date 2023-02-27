function Factorial() {
	var result = 0;
	var n = parseInt(document.getElementById('n').value);

	if (n == 0 || n == 1){
		result = calFactorial(n);
	} else{
		result = calFactorial(n-2) + calFactorial(n-1);
	}
	document.getElementById('showFactorial').innerHTML = result;
	return true;

}
function calFactorial(n) {
	var factorial = 0;
	if (n == 0) {
		factorial = 0;
	}else if (n == 1) {
		factorial = 1;
	}else{
		factorial = calFactorial(n-2) + calFactorial(n-1);

	}
	return factorial;
	
}
function clearResult() {
	document.getElementById('showFactorial').innerHTML= "";
	document.getElementById('n').focus();
}