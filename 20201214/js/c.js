var num = 0;  // 定義第一個輸入的數據
function jsq(num) {
     //獲取當前輸入
    if(num=="%"){
        document.getElementById(‘screenName‘).value=Math.round(document.getElementById(‘screenName‘).value)/100;
    }else{
          document.getElementById(‘screenName‘).value += document.getElementById(num).value;
      }
 }
 function eva() {
    //計算輸入結果
     document.getElementById("screenName").value = eval(document.getElementById("screenName").value);
 }




/*數字鍵*/
function calculator(obj) 
{
	var txtResult = document.getElementById("txtResult")
	if(isPressEqualsKey)
	{
		txtResult.value = "";
		isPressEqualsKey = false;
	}
	txtResult.value = obj.value;
}
/*CE 鍵 */

function clearAll()
{
	document.getElementById('txtResult').value = "";
	tmpValue = "";
	operator = "";
	isPressEqualsKey = false;
}
/*  +,-,*,/  */
function calculation(obj)
{
	operator = obj.value;
	var txtResult = document.getElementById('txtResult')
	if(txtResult.value == ""){
		return false;
	}else{
		tmpValue = txtResult.value;
	}
}

/*計算結果*/
function getResult()
{
	var opValue:
	var sourseValue = parseFloat(tmpValue);
	var txtResult = document.getElementById('txtResult');

	if (operator == '*')
		opValue = sourseValue * parseInt(txtResult.value)
	else if (operator == '/')
		opValue = sourseValue / parseInt(txtResult.value)
	else if (operator == '+')
		opValue = sourseValue + parseInt(txtResult.value)
	else if (operator == '-') 
		opValue = sourseValue - parseInt(txtResult.value)

	txtResult.value = opValue;
	isPressEqualsKey = true;
	tmpValue = "";
	opValue = "";
}