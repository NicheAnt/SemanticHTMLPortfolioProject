$(document).ready(function() {
//alert('jquery library is loaded :)');

  //on clicking a panel tab
  $('.panel-tab').on('click', '.link', function() {
      //make tab brighter
    $('.activated').removeClass('activated');
    $(this).addClass('activated');
      //change color elements according to tab number
    if ($(this).index()==1){
        //change section-background and tab separators
    $(this).closest('section').css('background', '#0b4f6c url("images/panel_blue.jpg") no-repeat');
    $(this).closest('section').css('background-size', '100% 100%');
    $(this).closest('.panel-tab').find('.link').css('border-bottom', '1vmin solid #074b68');
    }
    else if ($(this).index()==2){
    $(this).closest('section').css('background', '#0b4f6c url("images/panel_green.jpg") no-repeat');
    $(this).closest('section').css('background-size', '100% 100%');
    $(this).closest('.panel-tab').find('.link').css('border-bottom', '1vmin solid #25481e'); //green 25481e/294c22 separators
    }
    else {
      alert('oye! you clicked tab number '+$(this).index());
    }
  });

  //also add for key-up and key-down
  //$(document).on('keyup', '.panel-tab', function() {...}); ???

});
