
function fotnot_mouseover() {
  $(".fotnot").mouseover(function(){
  		$(this).attr("style","color:white;");
  	}
  );

  $(".fotnot").mouseout(function(){
  		$(this).attr("style","color:grey");
  	}
  );
} 

function hide() {
  $(document).ready(function(){
    $("#hide").click(function(){
      $(".segment").hide();
    });
  });  
}

function show() {
  $(document).ready(function(){
    $("#show").click(function(){
      $(".segment").show();
    });
  });
}

function fadeOn(){
  $("#fadeOn").click(function(){
    $(".segment").fadeTo(1000, 0.4);
  });
}

function fadeOff(){
  $("#fadeOff").click(function(){
    $(".segment").fadeTo(1000, 1.0);
  });
}

function animate() {
  $(document).ready(function(){
    $("#animate").click(function(){
      var div = $(".segment");
        div.animate({opacity: '0.1'}, "slow");
        div.animate({opacity: '1.0'}, "slow");
        div.animate({opacity: '0.1'}, "slow");
        div.animate({opacity: '1.0'}, "slow");
    });
  });
}

function slide()  {
  $(document).ready(function(){
    $("#slide").click(function(){
      $("#header").slideToggle("slow");
    });
  });
}
$(document).ready(function(){
    fotnot_mouseover();
    hide();
    show();
    fadeOn();
    fadeOff();
    animate();
    slide();
})