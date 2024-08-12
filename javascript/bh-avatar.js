// le js de thème control a été adapté (template overall_footer_end) pour intégrer le switch d'avatar selon le clic du bouton 
// placé dans overall_footer_end

(function () {
    const html = document.documentElement;
    const themeControls = document.querySelector("[data-theme-controls]");
    const toggle = themeControls.querySelector(".color-scheme-toggle");

    const setToggleLabel = function () {
        let mode = html.dataset.colorScheme;
        toggle.setAttribute(
            "title",
            "Activate " + (mode === "dark" ? "light" : "dark") + " mode"
        );
    };

    const setColorScheme = function (value) {
        html.dataset.colorScheme = value;
        localStorage.setItem("color-scheme", value);
        setToggleLabel();
        updateBhAvatar();
    };

    const init = function () {
        setToggleLabel();
    };

    toggle.addEventListener("click", function () {
        const scheme = html.dataset.colorScheme === "dark" ? "light" : "dark";
        setColorScheme(scheme);
    });

    init();

    document.addEventListener("DOMContentLoaded", function() {
        updateBhAvatar();
    });

    function updateBhAvatar() {
        const mainContent = document.getElementById("main-content");
        const bhAvatar = mainContent.querySelectorAll(".container .post .post_profile .post_avatar a[href='/u1'] img");

        bhAvatar.forEach(function (bhAvatar) {
            const newSrc = getComputedStyle(document.documentElement).getPropertyValue('--bhavatar').replace(/(?:^url\(['"]?|['"]?\)$)/g, '');
            bhAvatar.src = newSrc;
        });
    }
})();
