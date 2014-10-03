<?php 
  $html = '<html><head><meta charset="utf-8" /></head><body>';
  $html .= '<p>Hi '.$_GET["email"].' '.'</p>';
  $html .= '<p>Here is your button code:</p>';
  $html .= '<p>html: &lt;button&gt;'.$_GET["inner_text"].'&lt;/button&gt;</p>';
  $html .= "<p>css: <br/>"
          ."button {<br/>  width:".$_GET['width']
          ."px;<br/>  height:".$_GET['height']
          ."px;<br/>  border-width:".$_GET['border_size']
          ."px;<br/>  -moz-border-radius:".$_GET['border_radius']
          ."px;<br/>  -webkit-border-radius:".$_GET['border_radius']
          ."px;<br/>  border-radius:".$_GET['border_radius']
          ."px;<br/>  font-size:".$_GET['size']
          ."px;<br/>}</p>";
  $html.= '</body></html>';
  ?>