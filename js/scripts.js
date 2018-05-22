$(function(){
  $(".clickable").click(function(){
    console.log("clicked");
    $("#initially-showing").slideDown(2000);
    });

    $(".clickable-two").click(function(){
      console.log("clicked two");
      $("#initially-showing").slideUp(2000);
    });
});
