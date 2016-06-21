document.addEventListener('DOMContentLoaded', function(){
  if ($) {
    $("#search_main").find("input").on("keypress", function(e){
      if(e.keyCode === 13){ // enter key
        $(".submit").trigger("click");
      }
    });
  } else {
    console.log("Jquery not available. Jisho Helper cannot run.");
  }
}, false);