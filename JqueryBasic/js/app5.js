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

  // Deal with selected options depending on current page
  if ($anchor.parent().hasClass("selected")) {
      $option.prop("selected", true);
  }
  // option's value is the href
  $option.val($anchor.attr("href"));
  // option's text is the text of link
  $option.text($anchor.text());
  // append option to select
  $select.append($option);
});

// Bind change listener to the select
$select.change(function() {
  // Go to select's location
  window.location = $select.val();
});
