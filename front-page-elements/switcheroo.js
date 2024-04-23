/* JS pour ouvrir/fermer le switcheroo */
/* à mettre sur toutes les pages */

document.addEventListener("DOMContentLoaded", function() {
  let btn = document.getElementById('switcheroo__btn'); 
  let switcheroo = document.getElementById('switcheroo'); 

  function getCookie(sKey) {
      return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
  }

  btn.addEventListener('click', function() {
      if (getCookie("switcheroo")) {
          document.cookie = "switcheroo=";
      } else {
          document.cookie = "switcheroo=true";
      }
      switcheroo.classList.toggle("switcheroo--open");
  });

  if (getCookie("switcheroo")) {
      switcheroo.classList.toggle("switcheroo--open");
  }
});