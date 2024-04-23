document.addEventListener("DOMContentLoaded", function() {
    let btn = document.querySelector('.menu__icon');
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
        btn.classList.toggle("menu__icon--x");
    }

    btn.addEventListener('click', toggleSidebar);

    if (getCookie("sidebar")) {
        sidebar.classList.add("sidebar--open");
        btn.classList.add("menu__icon--x");
    }
});
