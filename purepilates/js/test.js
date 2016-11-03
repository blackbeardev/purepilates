$(document).ready(function(){

var hideDropDown = [
	"#beginners-dropdown", 
	"#essential-two-dropdown", 
	"#intermediate-dropdown", 
	"#seniors-dropdown", 
	"#stability-dropdown", 
	"#private-dropdown", 
	"#group-dropdown"
];

	for(var i = 0; i < hideDropDown.length; i += 1){
		$(hideDropDown[i]).hide();
	};

	 $(".essential-one-drop").click(function(){
	 $("#beginners-dropdown").slideToggle("slow");
	 });
	
	
	 $(".essential-two-drop").click(function(){
	 $("#essential-two-dropdown").slideToggle("slow");
	 });
	
	
	 $(".intermediate-drop").click(function(){
	 $("#intermediate-dropdown").slideToggle("slow");
	 });
	
	
	 $(".seniors-drop").click(function(){
	 $("#seniors-dropdown").slideToggle("slow");
	});
		
	
	 $(".stability-drop").click(function(){
	 $("#stability-dropdown").slideToggle("slow");
	});
	
	
	 $(".private-drop").click(function(){
	 $("#private-dropdown").slideToggle("slow");
	 });
	
	
	 $(".group-drop").click(function(){
	 $("#group-dropdown").slideToggle("slow");
	 });

	
});

