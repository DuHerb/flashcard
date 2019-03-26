$(function(){

  $(".card-header").click(function(){
    $(this).next(".card-body").toggleClass("hidden");
  });

});
