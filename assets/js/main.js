$(document).ready(function(){
	$("button").click(function(e){
		e.preventDefault();
		var name = $("#nombre").val();
		var message = $("#mensaje").val();

		if(name =="" || message == ""){
			alert("debes escribir tu nombre y mensaje")
		}
		else{
			$("#comentarios").append("<div><span class='center-align'>" + name + "</span><p class='center-align'>" + message + "</p></div>")
		}
	})


})