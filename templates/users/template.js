// send Button JS
$(document).ready(function() {
    $('button').on( "click", function() {
      $('.plane').addClass('fly');
      $('.hidden').addClass('visible');
      $('.replace').removeClass('fa-paper-plane').addClass('fa-check');
      $('span').text('SENT').addClass('fade');
      $(this).addClass('done');
    });
  });