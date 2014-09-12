function refreshButton() {
  var button = $("button"),
      width = $("#button-width").slider("value"),
      height = $("#button-height").slider("value"),
      border_radius = $("#border-radius").slider("value"),
      border_size = $("#border-size").slider("value"),
      inner_text = $("#button-text").val(),
      size = $("#font-size").slider("value"),
      css = {
        "width": 100 + width*2,
        "height": 50 + height*2,
        "border-width": border_size,
        "-moz-border-radius": border_radius,
        "-webkit-border-radius": border_radius,
        "border-radius": border_radius,
        "font-size": size 
      },
      html_code,
      css_code;
  html_code = "<button>"+inner_text+"</button";
  css_code = "button {\n";
  for ( i in css ){
    css_code +="  " + i + ":" + css[i] +";\n";  
  }
  css_code += "}\n"

  button.css(css)
  button.html( inner_text );
  $("#html-code").text(html_code);
  $("#css-code").text(css_code);
}

$(function() {
  $(".slider").slider({
    orientation: "horizontal",
    range: "min",
    max: 100,
    value: 15,
    slide: refreshButton,
    change: refreshButton
  });
  $("#button-width").slider({ value:100 });
  $("#button-height").slider({ value:50 });
  $("#border-size").slider({ value: 7, max: 10})
  $("#button-text").val("Click me!");
  $("#font-size").slider({ min: 10, value:36, max: 48})

  $("#button-text").bind("input",refreshButton);
  $("button").click( function( event) { event.preventDefault(); })
  window.onload = refreshButton;
});

