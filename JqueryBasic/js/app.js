// Problem: It looks gross in smaller browser widths and small devices
// Solution: To hide the text links and swap them out with a more appropriate

// Create a select and append to #menu
let $select = $("<select></select>");
$("#menu").append($select);

// Cycle over menu links
$("#menu a").each(function() {
  let $anchor = $(this);

  // Create an option
  let $option = $("<option></option>");

  // option's value is the href
  $option.val($anchor.attr("href"));
  // option's text is the text of link
  $option.text($anchor.text());
  // append option to select
  $select.append($option);
});

// Create button
let $button = $("<button>Go</button>");
$("#menu").append($button);
// Bind click to button
$button.click(function() {
  // Go to select's location
  window.location = $select.val();
});
// Modify CSS to hide links on small width and show button and select
 // Also hides select and button on larger width and show's links
// Deal with selected options depending on current page
