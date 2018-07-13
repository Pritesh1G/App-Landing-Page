$(document).ready(function(){
        $('.card-body').hover(
			//on mouse hover trigger this effect
            function(){
                $(this).animate({
                    marginTop: "-=3%",
                },200);
            },

          // on mouse exit effect
            function(){
                $(this).animate({
                    marginTop: "0%"
                },200);
            }
        );
    });


