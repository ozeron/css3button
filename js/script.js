var data = (function(){
  function _setDefault(a,value){
    return typeof a !== 'undefined' ? a : value;
  };
  function generateCss(){
    var code = "button {\n";
    for ( i in data.css ){
      code +="  " + i + ":" + data.css[i] +"px;\n";  
    }
    code += "}\n";
    return data.css_code = code;
  }
  function generateHtml(){
    return data.html_code = "<button>"+data.inner_text+"</button>";
  }
  function update(){
    this.button = $("#button");
    this.width = $("#button-width").slider("value");
    this.height = $("#button-height").slider("value");
    this.border_radius = $("#border-radius").slider("value");
    this.border_size = $("#border-size").slider("value");
    this.inner_text = $("#button-text").val();
    this.size = $("#font-size").slider("value");
    this.css = {
      "width": 100 + this.width*2,
      "height": 50 + this.height*2,
      "border-width": this.border_size,
      "-moz-border-radius": this.border_radius,
      "-webkit-border-radius": this.border_radius,
      "border-radius": this.border_radius,
      "font-size": this.size 
    };
    this.css_code = generateCss();
    this.html_code = generateHtml();
    data.setButtonHtml();
    data.setButtonCss();
    data.setXmpHtmlCode();
    data.setXmpCssCode();
  }
  function setHtml(code){
    //default value
    code = _setDefault(code,data.inner_text)
    this.button.html( code );
  }
  function setCss(code){
    code = _setDefault(code,data.css);
    this.button.css(code);
  }
  function setHtmlCode(code){
    code = _setDefault(code,data.html_code);
    $("#html-code").text(code);
  }
  function setCssCode(code){
    code = _setDefault(code,data.css_code);
    $("#css-code").text(code);
  }
  return {
    update:update,
    setButtonCss:setCss,
    setButtonHtml:setHtml,
    setXmpCssCode:setCssCode,
    setXmpHtmlCode:setHtmlCode,
    generateButtonHtml:generateHtml,
    generateButtonCss:generateCss
  }; 
})();

var action = (function(){
  function submit(event){
    alert("hey!");
    $("#send-form").submit();
    return false;

  }
  return{
    submit:submit
  }
})();

var app = (function(){
  var defaultButtonName = "button name";
  function refreshButton() {
    data.update();
  };
  function checkIfEmpty(event) {
    data.update();
    //cross browser event
    event = event || window.event 
    if ($(event.target).val() === ""){
      data.inner_text = defaultButtonName;
      data.setButtonHtml();
      data.generateButtonHtml();
      data.setXmpHtmlCode();
    }    
  };
  return {
    init:function() {
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
      $("#button-text").bind("input",checkIfEmpty);
      $("button").click( function( event) { event.preventDefault(); })
      window.onload = refreshButton;
      $("#html-code").bind("input",function(e) { data.setXmpHtmlCode(); });
      $("#css-code").bind("input",function(e) { data.setXmpCssCode(); });
      $('input[type="submit"]').click( action.submit);
    }
  };
})();
app.init();
