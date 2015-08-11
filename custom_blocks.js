(function ($) {
  $(document).ready(function() {
    //Function to iterate through digital sign location field and select all
    $('#edit-field-digital-sign-location-und-142').click(function(event) {
      if(this.checked) {
        // Iterate each checkbox
        $('#edit-field-digital-sign-location-und :checkbox').each(function() {
          this.checked = true;
        });
      }
      if(!this.checked) {
        // Iterate each checkbox
        $('#edit-field-digital-sign-location-und :checkbox').each(function() {
          this.checked = false;
        });
      }
    });

    $('#edit-field-informational-display-loca-und-142').click(function(event) {
      if(this.checked) {
        // Iterate each checkbox
        $('#edit-field-informational-display-loca-und :checkbox').each(function() {
          this.checked = true;
        });
      }
      if(!this.checked) {
        // Iterate each checkbox
        $('#edit-field-informational-display-loca-und :checkbox').each(function() {
          this.checked = false;
        });
      }
    });
  });
})(jQuery);
