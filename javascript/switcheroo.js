/* JS pour ouvrir/fermer le switcheroo */
/* à mettre sur toutes les pages */

document.addEventListener("DOMContentLoaded", function() {
    let btn = document.getElementById('switcheroo__btn'); 
    let switcheroo = document.getElementById('switcheroo'); 
  
    function getCookie(sKey) {
        return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
    }

    function toggleSwitcheroo() {
        if (getCookie("switcheroo")) {
            document.cookie = "switcheroo=";
        } else {
            document.cookie = "switcheroo=true";
        }
        switcheroo.classList.toggle("switcheroo--open");
        btn.classList.toggle("switcheroo__icon--closed");
    }

    btn.addEventListener('click', toggleSwitcheroo);

    if (getCookie("switcheroo")) {
        switcheroo.classList.add("switcheroo--open");
        btn.classList.add("switcheroo__icon--closed");
    }
});
