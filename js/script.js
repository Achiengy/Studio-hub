

$(document).ready(function(){
 $("#design").click(function(){
     $("#design").hide();
     $("#text1").hide();
    $("#title1").toggle();
    $("#hidden1").toggle();
 });

 $("#development").click(function(){
    $("#development").hide();
    $("#text2").hide();
    $("#title2").toggle();
    $("#hidden2").toggle();
 });

 $("#product").click(function(){
    $("#product").hide();
    $("#text3").hide();
    $("#title3").toggle();
    $("#hidden3").toggle();
 });
});