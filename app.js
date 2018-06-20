$(document).ready(loadPage);

var target = 0;

var loadPage = function () {
  //Elementos
  var $buttons= $(".control");
  var $previous = $(".previous");
  var $next = $(".next")

   //Eventos
   $buttons.click(change Image);
   $previous.click(previousImages);
   $next.click(nextImage);
};
