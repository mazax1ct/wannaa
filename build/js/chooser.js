$(document).on('change', '.chooser select', function () {
  $(this).closest('.chooser').find('.chooser__image').attr('src', $(this).find(":selected").attr('data-src')).attr('srcset', $(this).find(":selected").attr('data-srcset'));
  return false;
});
