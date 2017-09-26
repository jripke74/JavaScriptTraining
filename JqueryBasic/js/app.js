// Problem: User when clicking on image goes to a dead end
// Solution: Create an overlay with the large image - Lightbox

let $overlay = $('<div id="overlay"></div>');
let $image = $("<img>");
let $caption = $("<p></p>");

// add image to overlay
$overlay.append($image);

// Add caption to overlay
$overlay.append($caption);

// Add overlay
$("body").append($overlay);

// Capture the click event on a link to an image
$("#imageGallery a").click(function(event) {
  event.preventDefault();
  let imageLocation = $(this).attr("href");
  // Update overlay with the image linked in the link
  $image.attr("src", imageLocation);
  // Show the overlay
  $overlay.show();
  // Get child's alt attribute and set caption
  let captionText = $(this).children("img").attr("alt");
  $caption.text(captionText);
});


// When overlay is clicked
$overlay.click(function() {
  // Hide the overlay
  $overlay.hide();
});
