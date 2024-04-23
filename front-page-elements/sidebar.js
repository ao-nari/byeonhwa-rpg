/* gestion de la sidebar + bouton (et sauvegarde de l'état via cookie) */

document.addEventListener("DOMContentLoaded", function() {
    let btn = document.getElementById('sidebar__btn'); 
    let sidebar = document.getElementById('sidebar'); 

    function getCookie(sKey) {
        return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
    }

    function toggleSidebar() {
        if (getCookie("sidebar")) {
            document.cookie = "sidebar=";
        } else {
            document.cookie = "sidebar=true";
        }
        sidebar.classList.toggle("sidebar--open");
        // update du bouton selon l'état de la sidebar
        if (sidebar.classList.contains("sidebar--open")) {
            btn.innerHTML = '<span class="menu__icon--x"><i></i><i></i><i></i></span> fermer';
        } else {
            btn.innerHTML = '<span class="menu__icon"><i></i><i></i><i></i></span> menu';
        }
    }

    btn.addEventListener('click', toggleSidebar);

    if (getCookie("sidebar")) {
        sidebar.classList.add("sidebar--open");
        btn.innerHTML = '<span class="menu__icon--x"><i></i><i></i><i></i></span> fermer';
    } else {
        btn.innerHTML = '<span class="menu__icon"><i></i><i></i><i></i></span> menu'; 
    }
});
