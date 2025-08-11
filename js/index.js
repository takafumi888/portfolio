// ハンバーガーボタンとドロワー
$("#js-button-drawer").on("click",function(){
  $(this).toggleClass("is-cheked");
  $("#js-drawer").slideToggle();
  $("body").toggleClass("is-fixed");
});