(function($) {
  $('.btn-open-modal').on('click', function() {
    var target = $(this).data('target');
    $(target).addClass('in');
  });

  $('.modal').on('click', function(e) {
    //Check whether click on modal-content    
    if (e.target !== this)      
      return;

    $(this).removeClass('in');
  });
})(jQuery);