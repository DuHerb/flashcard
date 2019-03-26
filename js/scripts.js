$(function(){
// clickable header to toggle visibility of body
  $(".card-header").click(function(){
    $(this).next(".card-body").toggleClass("hidden");
  });
  
});
