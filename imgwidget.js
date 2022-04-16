const getText = () => reearth.widget.property && reearth.widget.property.default ? reearth.widget.property.default || "" : "";


const html = `
<div id="imgwrapper" style="background:rgba(200,200,200,0);text-align: center;">
<span id="title" style="text-align:center; font-size:30px;"> </span>
<img id="imgwidget" src="" style="display: block; margin: auto;">
</div>
<style>
  html, body {
    margin: 0;
    background: transparent;
  }
</style>
<script>
  const cb = text => {
    if(text.hasOwnProperty("title")){
      document.getElementById("title").innerHTML = text.title;
    }else{
      document.getElementById("title").innerHTML = "";
    }
    document.getElementById("imgwidget").src = text.image;

    if(text.hasOwnProperty("ImageSize")){
      document.getElementById("imgwidget").style.width  = text.ImageSize + "%";
    }else{
      document.getElementById("imgwidget").style.width  = "100%";
    }

    if(text.hasOwnProperty("ImageOpacity")){
      document.getElementById("imgwidget").style.opacity  = (100-text.ImageOpacity)/100;
    }else{
      document.getElementById("imgwidget").style.opacity  = 1;
    }
    if(text.hasOwnProperty("bgColor")){
      document.getElementById("imgwrapper").style.backgroundColor = text.bgColor;
    }else{
      document.getElementById("imgwrapper").style.backgroundColor = "transparent";
    }
  };
  addEventListener("message", e => {
    if (e.source !== parent) return;
    cb(e.data);
  });
  cb(${JSON.stringify(getText())});
</script>
`;

reearth.ui.show(html);
reearth.on("update", () => {
  reearth.ui.postMessage(getText());
});
