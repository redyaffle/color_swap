var changeColor = function(hex, element) {
  $("#" + element).css({'background-color' : hex});
}

var selectColor = function() {
  $("li").click(function(e) {
    color_link = e.target.id
    changeColor(color_link, "color_box");
  })
};