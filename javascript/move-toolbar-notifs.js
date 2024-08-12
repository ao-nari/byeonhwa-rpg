document.addEventListener("DOMContentLoaded", function () {

    function moveToolbarAndNotifs() {
        var sidebar = document.getElementById("sidebar");
        var toolbar = document.getElementById("fa_toolbar");
        var notifs = document.getElementById("fa_notifications");

        sidebar.insertBefore(toolbar, sidebar.firstChild);

        var navbar = document.getElementById("navbar");
        var rightMenu = navbar.querySelector(".navbar__rightmenu");

        if (navbar && rightMenu && notifs) {
            rightMenu.insertBefore(notifs, rightMenu.firstChild);
        } else {
            console.error("Could not find notif_list element.");
        }
    }

    function adjustNotifListBorderRadius() {
        var notifList = document.getElementById("notif_list");
        if (notifList) {
            // Force a reflow to ensure the style update is applied after any layout changes
            notifList.offsetHeight; // Trigger reflow

            if (notifList.scrollHeight > notifList.clientHeight) {
                // If scrollable, apply border-radius with !important
                notifList.style.setProperty('border-radius', 'var(--small-radius) 0 0 var(--small-radius)', 'important');
            } else {
                // If not scrollable, revert to CSS-defined border-radius
                notifList.style.removeProperty('border-radius');
            }
        }
    }

    function debounce(func, wait) {
        let timeout;
        return function(...args) {
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(this, args), wait);
        };
    }

    moveToolbarAndNotifs();
    adjustNotifListBorderRadius();

    // Monitor changes within notif_list and resize events
    const observer = new MutationObserver(debounce(adjustNotifListBorderRadius, 100));
    observer.observe(document.getElementById('notif_list'), { childList: true, subtree: true });

    window.addEventListener('resize', debounce(adjustNotifListBorderRadius, 100));
});