document.addEventListener("DOMContentLoaded", function() {
    var postPseudoSpans = document.querySelectorAll('.post_profile .post_pseudo a[href*="/u"] span');
    console.log(postPseudoSpans); 
  
    postPseudoSpans.forEach(function(span) {
      var color = window.getComputedStyle(span).getPropertyValue("color");
      var rgbaColor = addOpacity(color, 0.3);
      var gradientColor = "linear-gradient(to bottom, " + rgbaColor + ", var(--baseClr3-10)"; 
      
      var postProfil = span.closest('.post_profile');
      var postAvatar = postProfil.querySelector('.post_avatar');
      
      if (postAvatar) {
        postAvatar.style.background = gradientColor;
      }
    });

    function addOpacity(color, opacity) {
        var rgbaComponents = color.match(/\d+/g);
        rgbaComponents[3] = opacity;
        return "rgba(" + rgbaComponents.join(", ") + ")";
    }
});