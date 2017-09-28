// Problem: No user interaction causes no change to application
// Solution: When user interacts cause changes appropriately
let color = $(".selected").css("background-color");
let $canvas = $("canvas");
let context = $canvas[0].getContext("2d");
let lastEvent;
let mouseDown = false;

// When clicking on control list items
$(".controls").on("click", "li", function() {
  // Deselect sibling elements
  $(this).siblings().removeClass("selected");
  // Select clicked element
  $(this).addClass("selected");
  // cache current color
  color = $(this).css("background-color");
});

// When "new color" is pressed
$("#revealColorSelect").click(function() {
  // Show color select or hide the color select
  changeColor();
  $("#colorSelect").toggle();
});

// update the new color span
function changeColor() {
  let red = $("#red").val();
  let green = $("#green").val();
  let blue = $("#blue").val();
  $("#newColor").css("background-color", "rgb(" + red + "," + green + "," + blue + ")");
}

// When color sliders change
$("input[type=range]").change(changeColor);

// When "add color" is pressed
$("#addNewColor").click(function() {
  // Append the color to the controls ul
  let $newColor = $("<li></li>");
  $newColor.css("background-color", $("#newColor").css("background-color"));
  $(".controls ul").append($newColor);
  // Select the new color
  $newColor.click();
});


// On mouse events on the canvas
$canvas.mousedown(function(event) {
  lastEvent = event;
  mouseDown = true;
}).mousemove(function(event) {
  // Draw lines
  if (mouseDown) {
    context.beginPath();
    context.moveTo(lastEvent.offsetX, lastEvent.offsetY);
    context.lineTo(event.offsetX, event.offsetY);
    context.strokeStyle = color;
    context.stroke();
    lastEvent = event;
  }
}).mouseup(function() {
  mouseDown = false;
}).mouseleave(function() {
  $canvas.mouseup();
});
