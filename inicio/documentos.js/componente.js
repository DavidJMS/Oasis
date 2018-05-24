$(document).ready(function () {
  var trigger = $('.hamburger'),
      overlay = $('.overlay'),
     isClosed = false;

    trigger.click(function () {
      hamburger_cross();      
    });

    function hamburger_cross() {

      if (isClosed == true) {          
        overlay.hide();
        trigger.removeClass('is-open');
        trigger.addClass('is-closed');
        isClosed = false;
      } else {   
        overlay.show();
        trigger.removeClass('is-closed');
        trigger.addClass('is-open');
        isClosed = true;
      }
  }
  
  $('[data-toggle="offcanvas"]').click(function () {
        $('#wrapper').toggleClass('toggled');
  });  
});

 function principal() { // onload body
    new CarruselB({
      id: "carousel-inner",
      waiting: 7000, // milliseconds (false per desactivar)
    });
  }
function mostrar(a,b,c,d){
  if(d==1){
  document.getElementById(b).style.display = "block";
  document.getElementById(c).style.display = "block";
  document.getElementById(a).style.display = 'none';
  }
  else{
  document.getElementById(b).style.display = "block";
  document.getElementById(c).style.display = 'none';
  document.getElementById(a).style.display = 'none';
  }
}

