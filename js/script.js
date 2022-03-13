$(document).ready(function(){


$("#black").hover(
   function () {
     $(this).find(".word1").fadeIn(200);
   },
   function () {
     $(this).find(".word1").fadeOut(100);
   }
 );
 
 $("#ontario").hover(
   function () {
     $(this).find(".word2").fadeIn(200);
   },
   function () {
     $(this).find(".word2").fadeOut(100);
   }
 );
 
 $("#golden").hover(
   function () {
     $(this).find(".word3").fadeIn(200);
   },
   function () {
     $(this).find(".word3").fadeOut(100);
   }
 );
 
 $("#carrey").hover(
   function () {
     $(this).find(".word4").fadeIn(200);
   },
   function () {
     $(this).find(".word4").fadeOut(100);
   }
 );
 
 $("#enjoy").hover(
   function () {
     $(this).find(".word5").fadeIn(200);
   },
   function () {
     $(this).find(".word5").fadeOut(100);
   }
 );
 
 $("#button").hover(
   function () {
     $(this).find(".word6").fadeIn(200);
   },
   function () {
     $(this).find(".word6").fadeOut(100);
   }
 );
 
 $("#burned").hover(
   function () {
     $(this).find(".word7").fadeIn(200);
   },
   function () {
     $(this).find(".word7").fadeOut(100);
   }
 );
 
 $("#bailey").hover(
   function () {
     $(this).find(".word8").fadeIn(200);
   },
   function () {
     $(this).find(".word8").fadeOut(100);
   }
 );

});



// WHAT-WE-DO TOGGLE EFFECT ON ICONS
$(document).ready(function () {
   $(".design").click(function () {
     $("#design").toggle();
     $("#hidden1").toggle();
   });

 $(".development").click(function () {
     $("#development").toggle();
     $("#hidden2").toggle();
   });
 
 $(".product").click(function () {
     $("#product").toggle();
     $("#hidden3").toggle();
   });
});

// SUBMIT FORM VALIDATION
$("form").on("submit", function (e) {
  e.preventDefault();
  var name = $("#name").val();
  alert(
    "Hi" + " " + name + ",\nThanks for the feedback. " + "\nBy Delani Studio. " 
  );
  document.querySelector("form").reset();
});
 


