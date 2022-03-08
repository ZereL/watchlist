// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
(function ($) {
    $(document).ready(function () {
		// if #launch-list section on page
        if ($('#launch-list').length) {
			// request to api
            $.get('https://api.spacexdata.com/v4/rockets', function (data) {
                var html = '';
				// loop through data, concatenate html 
                $.each(data, function (index, item) {
                    var rocketInfo = {
                        name: item.name,
                        description: item.description,
                        image: item.flickr_images[0],
                    };
					
                    html += '<div class="col-md-6">';
                    html += '<div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">';
                    html += '<div class="col-12 d-none d-lg-block">';
                    html += '<img width="100%" height="300px" src="' + item.flickr_images[0] + '"/>';
                    html += '</div>'; // col-auto d-none d-lg-block
                    html += '<div class="col p-4 d-flex flex-column position-static">';
                    html += '<h3 class="mb-0 mb-2">' + item.name + '</h3>';
                    html += '<p class="card-text mb-3">' + item.description + '</p>';
                    html += '<a href="#" data-name="' + item.name  + '" data-description="' + item.description  + '" data-image="' + item.flickr_images[0]  + '" class="add-to-watchlist-btn btn btn-primary">Add to watchlist</a>';
                    html += '</div>'; // col p-4 d-flex flex-column position-static
                    html += '</div>'; // rrow g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative
                    html += '</div>'; // col-md-6
                });

				// Add html to dom element
                $('#launch-list').html(html);
            }).fail(function() {
				alert( "Error fetch from api" );
			});
        }
    });

    $(window).on('load', function () {

		// listen to on click event of add to watchlist button in launch list
        $('body').on('click', '#launch-list .add-to-watchlist-btn', function (e) {
            e.preventDefault();
            e.stopPropagation();

			// Post request to save interested launch data to db.
			$.ajax({
				type: "POST",
				url: "/Home/LaunchList",
				data: {
					Name: $(this).data('name'),
					Description: $(this).data('description'),
					Image: $(this).data('image'),
				},
				statusCode: {
					// if data model to api not valid, rocket name is required
					400: function (response) {
					    alert('400 bad request');
					},
				 },
				success: function (data) {
					// if data valid but have error message returned, eg. data already exist
					if (data.errorMessage) {
						alert(data.errorMessage);
					} else {
						// if success, redirect
						// document.location.href="/";
					}
				},
			  });
        });
    });
})(jQuery);
