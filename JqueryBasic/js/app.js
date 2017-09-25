 // Prevent spoilerphobes from seeing spoilers
 // Solution: Hide spoilers and reveal them through user ineraction

 // 1. Hide spoilers
 $(".spoiler span").hide();
 // 2. Add a button
 $(".spoiler").append("<button>Reveal Spoler!</button>");
 // 3. When Button Pressed
 $("button").click(function() {
   // 3.1. Show spoiler
   $(".spoiler span").show();
   // 3.2. Get rid of button
   $(this).remove();
 });
