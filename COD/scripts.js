/* noch für multiplayer zum klicken machen*/
$(document).ready(function(){

	$(".gap2, .gap03").hide();
	var toggle = true;
	$(".gap01").click(function(){
		
		console.log(toggle);
		if (toggle) {
			//Alle anderen bis auf das geklickte müssen ausgeblendet werden... 
			$(".gap03, .gap2, .gap41, .gap42, .gap43, .gap44, .gap45, .gap46, .gap47, .gap48, .gap49, .gap410, .gap411, .gap412, .gap413").fadeOut('50');
			// ...und die Klasse luecke entfernt werden
			$(" .gap21, .gap22, .gap23, .gap24, .gap25, .gap26, .gap27, .gap28, .gap29, .gap210, .gap211, .gap212, .gap213").removeClass("luecke");		
	
			$(".gap2").fadeIn('500');
		

		} else {
			$(".gap2, .gap41, .gap42, .gap43, .gap44, .gap45, .gap46, .gap47, .gap48, .gap49, .gap410, .gap411, .gap412, .gap413 ").fadeOut('500');
			$(".gap03").fadeOut('500');
						 	
		}
		toggle = !toggle; 
		console.log(toggle);
			

	});
});

$(document).ready(function(){

	$(".gap2, .gap03").hide();
	var toggle = true;
	$(".gap02").click(function(){
			console.log(toggle);
		if (toggle) {
	//Alle anderen bis auf das geklickte müssen ausgeblendet werden... 
			$(".gap2, .gap41, .gap42, .gap43, .gap44, .gap45, .gap46, .gap47, .gap48, .gap49, .gap410, .gap411, .gap412, .gap413").fadeOut('50');
			// ...und die Klasse luecke entfernt werden
			$(" .gap21, .gap22, .gap23, .gap24, .gap25, .gap26, .gap27, .gap28, .gap29, .gap210, .gap211, .gap212, .gap213").removeClass("luecke");		
	
			$(".gap03").fadeIn('500');
			
		} else {
			$(".gap03, .gap41, .gap42, .gap43, .gap44, .gap45, .gap46, .gap47, .gap48, .gap49, .gap410, .gap411, .gap412, .gap413").fadeOut('500');
			$(".gap2").fadeOut('500');
			
			 	
		}
		toggle = !toggle; 
		console.log(toggle);
			

	});
});


/* Search and rescue*/
$(document).ready(function(){

	$(".gap31, .gap41").hide();
	var toggle = true;
	$(".gap21").click(function(){
		
		console.log(toggle);
		if (toggle) {
			//Alle anderen bis auf das geklickte müssen ausgeblendet werden... 
			$(".gap42, .gap43, .gap44, .gap45, .gap46, .gap47, .gap48, .gap49, .gap410, .gap411, .gap412, .gap413").fadeOut('50');
			// ...und die Klasse luecke entfernt werden
			$(" .gap21, .gap22, .gap23, .gap24, .gap25, .gap26, .gap27, .gap28, .gap29, .gap210, .gap211, .gap212, .gap213").removeClass("luecke");		
	
			$(".gap31, .gap41").fadeIn('500');
			$(".gap21").addClass("luecke");
			
			

		} else {
			$(".gap31, .gap41").fadeOut('500');
			$(".gap21").removeClass("luecke");
			 	
		}
		toggle = !toggle; 
		console.log(toggle);
			

	});
});


/* gungame*/
$(document).ready(function(){

	$(".gap32, .gap42").hide();
	var toggle = true;
	$(".gap22").click(function(){
		
		console.log(toggle);
		if (toggle) {
			//Alle anderen bis auf das geklickte müssen ausgeblendet werden... 
			$(".gap41, .gap43, .gap44, .gap45, .gap46, .gap47, .gap48, .gap49, .gap410, .gap411, .gap412, .gap413").fadeOut('50');
			// ...und die Klasse luecke entfernt werden
			$(".gap21, .gap22, .gap23, .gap24, .gap25, .gap26, .gap27, .gap28, .gap29, .gap210, .gap211, .gap212, .gap213").removeClass("luecke");		
			
			$(".gap32, .gap42").fadeIn('500');
			$(".gap22").addClass("luecke");

		} else {

			$(".gap32, .gap42").fadeOut('500');
			$(".gap22").removeClass("luecke");
			 	
		}
		toggle = !toggle; 
		console.log(toggle);
			

	});
});

/* cranked*/
$(document).ready(function(){

	$(".gap33, .gap43").hide();
	var toggle = true;
	$(".gap23").click(function(){
		
		console.log(toggle);
		if (toggle) {
			//Alle anderen bis auf das geklickte müssen ausgeblendet werden... 
			$(".gap41, .gap42, .gap44, .gap45, .gap46, .gap47, .gap48, .gap49, .gap410, .gap411, .gap412, .gap413").fadeOut('50');
			// ...und die Klasse luecke entfernt werden
			$(".gap21, .gap22, .gap23, .gap24, .gap25, .gap26, .gap27, .gap28, .gap29, .gap210, .gap211, .gap212, .gap213").removeClass("luecke");		
			
			$(".gap33, .gap43").fadeIn('500');
			$(".gap23").addClass("luecke");

		} else {
			$(".gap33, .gap43").fadeOut('500');
			$(".gap23").removeClass("luecke");
			 	
		}
		toggle = !toggle; 
		console.log(toggle);
			

	});
});

/* free f a*/
$(document).ready(function(){

	$(".gap34, .gap44").hide();
	var toggle = true;
	$(".gap24").click(function(){
		
		console.log(toggle);
		if (toggle) {
			//Alle anderen bis auf das geklickte müssen ausgeblendet werden... 
			$(".gap41, .gap42, .gap43, .gap45, .gap46, .gap47, .gap48, .gap49, .gap410, .gap411, .gap412, .gap413").fadeOut('50');
			// ...und die Klasse luecke entfernt werden
			$(".gap21, .gap22, .gap23, .gap24, .gap25, .gap26, .gap27, .gap28, .gap29, .gap210, .gap211, .gap212, .gap213").removeClass("luecke");		
	
			$(".gap34, .gap44").fadeIn('500');
			$(".gap24").addClass("luecke");

		} else {
			$(".gap34, .gap44").fadeOut('500');
			$(".gap24").removeClass("luecke");
			 	
		}
		toggle = !toggle; 
		console.log(toggle);
			

	});
});

/* team deathm*/
$(document).ready(function(){

	$(".gap35, .gap45").hide();
	var toggle = true;
	$(".gap25").click(function(){
		
		console.log(toggle);
		if (toggle) {
			//Alle anderen bis auf das geklickte müssen ausgeblendet werden... 
			$(".gap41, .gap42, .gap43, .gap44, .gap46, .gap47, .gap48, .gap49, .gap410, .gap411, .gap412, .gap413").fadeOut('50');
			// ...und die Klasse luecke entfernt werden
			$(".gap21, .gap22, .gap23, .gap24, .gap25, .gap26, .gap27, .gap28, .gap29, .gap210, .gap211, .gap212, .gap213").removeClass("luecke");		
	
			$(".gap35, .gap45").fadeIn('500');
			$(".gap25").addClass("luecke");

		} else {
			$(".gap35, .gap45").fadeOut('500');
			$(".gap25").removeClass("luecke");
			 	
		}
		toggle = !toggle; 
		console.log(toggle);
			

	});
});

/* search and destroy*/
$(document).ready(function(){

	$(".gap36, .gap46").hide();
	var toggle = true;
	$(".gap26").click(function(){
		
		console.log(toggle);
		if (toggle) {
			//Alle anderen bis auf das geklickte müssen ausgeblendet werden... 
			$(".gap41, .gap42, .gap43, .gap44, .gap45, .gap47, .gap48, .gap49, .gap410, .gap411, .gap412, .gap413").fadeOut('50');
			// ...und die Klasse luecke entfernt werden
			$(".gap21, .gap22, .gap23, .gap24, .gap25, .gap26, .gap27, .gap28, .gap29, .gap210, .gap211, .gap212, .gap213").removeClass("luecke");		
	
			$(".gap36, .gap46").fadeIn('500');
			$(".gap26").addClass("luecke");

		} else {
			$(".gap36, .gap46").fadeOut('500');
			$(".gap26").removeClass("luecke");
			 	
		}
		toggle = !toggle; 
		console.log(toggle);
			

	});
});
/* domination*/
$(document).ready(function(){

	$(".gap37, .gap47").hide();
	var toggle = true;
	$(".gap27").click(function(){
		
		console.log(toggle);
		if (toggle) {
			//Alle anderen bis auf das geklickte müssen ausgeblendet werden... 
			$(".gap41, .gap42, .gap43, .gap44, .gap45, .gap46, .gap48, .gap49, .gap410, .gap411, .gap412, .gap413").fadeOut('50');
			// ...und die Klasse luecke entfernt werden
			$(".gap21, .gap22, .gap23, .gap24, .gap25, .gap26, .gap27, .gap28, .gap29, .gap210, .gap211, .gap212, .gap213").removeClass("luecke");		
			
			$(".gap37, .gap47").fadeIn('500');
			$(".gap27").addClass("luecke");

		} else {
			$(".gap37, .gap47").fadeOut('500');
			$(".gap27").removeClass("luecke");
			 	
		}
		toggle = !toggle; 
		console.log(toggle);
			

	});
});

/* team tactical*/
$(document).ready(function(){

	$(".gap38, .gap48").hide();
	var toggle = true;
	$(".gap28").click(function(){
		
		console.log(toggle);
		if (toggle) {
			//Alle anderen bis auf das geklickte müssen ausgeblendet werden... 
			$(".gap41, .gap42, .gap43, .gap44, .gap45, .gap46, .gap47, .gap49, .gap410, .gap411, .gap412, .gap413").fadeOut('50');
			// ...und die Klasse luecke entfernt werden
			$(".gap21, .gap22, .gap23, .gap24, .gap25, .gap26, .gap27, .gap28, .gap29, .gap210, .gap211, .gap212, .gap213").removeClass("luecke");		
			
			$(".gap38, .gap48").fadeIn('500');
			$(".gap28").addClass("luecke");

		} else {
			$(".gap38, .gap48").fadeOut('500');
			$(".gap28").removeClass("luecke");
			 	
		}
		toggle = !toggle; 
		console.log(toggle);
			

	});
});

/* infected*/
$(document).ready(function(){

	$(".gap39, .gap49").hide();
	var toggle = true;
	$(".gap29").click(function(){
		
		console.log(toggle);
		if (toggle) {
//Alle anderen bis auf das geklickte müssen ausgeblendet werden... 
			$(".gap41, .gap42, .gap43, .gap44, .gap45, .gap46, .gap47, .gap48, .gap410, .gap411, .gap412, .gap413").fadeOut('50');
			// ...und die Klasse luecke entfernt werden
			$(".gap21, .gap22, .gap23, .gap24, .gap25, .gap26, .gap27, .gap28, .gap29, .gap210, .gap211, .gap212, .gap213").removeClass("luecke");		
	
			$(".gap39, .gap49").fadeIn('500');
			$(".gap29").addClass("luecke");

		} else {
			$(".gap39, .gap49").fadeOut('500');
			$(".gap29").removeClass("luecke");
			 	
		}
		toggle = !toggle; 
		console.log(toggle);
			

	});
});
/* blitz*/
$(document).ready(function(){

	$(".gap310, .gap410").hide();
	var toggle = true;
	$(".gap210").click(function(){
		
		console.log(toggle);
		if (toggle) {
			$(".gap41, .gap42, .gap43, .gap44, .gap45, .gap46, .gap47, .gap48, .gap49, .gap411, .gap412, .gap413").fadeOut('50');
			// ...und die Klasse luecke entfernt werden
			$(".gap21, .gap22, .gap23, .gap24, .gap25, .gap26, .gap27, .gap28, .gap29, .gap210, .gap211, .gap212, .gap213").removeClass("luecke");		
			
			$(".gap310, .gap410").fadeIn('500');
			$(".gap210").addClass("luecke");

		} else {
			$(".gap310, .gap410").fadeOut('500');
			$(".gap210").removeClass("luecke");
			 	
		}
		toggle = !toggle; 
		console.log(toggle);
			

	});
});

/* hunted free f a*/
$(document).ready(function(){

	$(".gap311, .gap411").hide();
	var toggle = true;
	$(".gap211").click(function(){
		
		console.log(toggle);
		if (toggle) {
			$(".gap41, .gap42, .gap43, .gap44, .gap45, .gap46, .gap47, .gap48, .gap49, .gap410, .gap412, .gap413").fadeOut('50');
			// ...und die Klasse luecke entfernt werden
			$(".gap21, .gap22, .gap23, .gap24, .gap25, .gap26, .gap27, .gap28, .gap29, .gap210, .gap211, .gap212, .gap213").removeClass("luecke");		
	
			$(".gap311, .gap411").fadeIn('500');
			$(".gap211").addClass("luecke");

		} else {
			$(".gap311, .gap411").fadeOut('500');
			$(".gap211").removeClass("luecke");
			 	
		}
		toggle = !toggle; 
		console.log(toggle);
			

	});
});

/* ground war*/
$(document).ready(function(){

	$(".gap312, .gap412").hide();
	var toggle = true;
	$(".gap212").click(function(){
		
		console.log(toggle);
		if (toggle) {
			$(".gap41, .gap42, .gap43, .gap44, .gap45, .gap46, .gap47, .gap48, .gap49, .gap410, .gap411, .gap413").fadeOut('50');
			// ...und die Klasse luecke entfernt werden
			$(".gap21, .gap22, .gap23, .gap24, .gap25, .gap26, .gap27, .gap28, .gap29, .gap210, .gap211, .gap212, .gap213").removeClass("luecke");		
	
			$(".gap312, .gap412").fadeIn('500');
			$(".gap212").addClass("luecke");


		} else {
			$(".gap312, .gap412").fadeOut('500');
			$(".gap212").removeClass("luecke");
			 	
		}
		toggle = !toggle; 
		console.log(toggle);
			

	});
});


/* drop zone*/
$(document).ready(function(){

	$(".gap313, .gap413").hide();
	var toggle = true;
	$(".gap213").click(function(){
		
		console.log(toggle);
		if (toggle) {
			$(".gap41, .gap42, .gap43, .gap44, .gap45, .gap46, .gap47, .gap48, .gap49, .gap410, .gap411, .gap412").fadeOut('50');
			// ...und die Klasse luecke entfernt werden
			$(".gap21, .gap22, .gap23, .gap24, .gap25, .gap26, .gap27, .gap28, .gap29, .gap210, .gap211, .gap212, .gap213").removeClass("luecke");		
	
			$(".gap313, .gap413").fadeIn('500');
			$(".gap213").addClass("luecke");

		} else {
			$(".gap313, .gap413").fadeOut('500');
			$(".gap213").removeClass("luecke");
			 	
		}
		toggle = !toggle; 
		console.log(toggle);
			

	});
});





