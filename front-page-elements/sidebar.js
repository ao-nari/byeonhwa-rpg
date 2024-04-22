/* JS pour ouvrir/fermer la sidebar */
/* à mettre sur toutes les pages */

document.addEventListener("DOMContentLoaded", function() {
    let btn = document.getElementById('sidebar__btn'); 
    let sidebar = document.getElementById('sidebar'); 

    function getCookie(sKey) {
        return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
    }

    btn.addEventListener('click', function() {
        if (getCookie("sidebar")) {
            document.cookie = "sidebar=";
        } else {
            document.cookie = "sidebar=true";
        }
        sidebar.classList.toggle("sidebar--open");
    });

    if (getCookie("sidebar")) {
        sidebar.classList.toggle("sidebar--open");
    }
});