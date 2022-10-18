window.onload = () => {
    // (A) traes todas las pikchures
    let all = document.getElementsByClassName("zoomE");
   
    // (B) click y magick
    if (all.length>0) { for (let i of all) {
      i.onclick = () => {
        // (B1) para salir del fullscreeen
        if (document.fullscreenElement != null || document.webkitFullscreenElement != null) {
          if (document.exitFullscreen) { document.exitFullscreen(); }
          else { document.webkitCancelFullScreen(); }
        }
   
        // (B2) para zoom a full
        else {
          if (i.requestFullscreen) { i.requestFullscreen(); }
          else { i.webkitRequestFullScreen(); }
        }
      };
    }}
  }; 