document.addEventListener("DOMContentLoaded", function() {
    // Initial background update
    updateBackground();

    // Create a MutationObserver to detect changes to the 'data-color-scheme' attribute
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.attributeName === 'data-color-scheme') {
                // Update the background when the theme changes
                updateBackground();
            }
        });
    });

    // Observe changes to the 'data-color-scheme' attribute on the document root
    observer.observe(document.documentElement, {
        attributes: true
    });
});

function updateBackground() {
    var profileTitleSpans = document.querySelectorAll('.profile__title span[style*="color"]');

    profileTitleSpans.forEach(function(span) {
        var color = window.getComputedStyle(span).getPropertyValue("color");
        var rgbaColor = addOpacity(color, 0.3);

        // Get the value of --baseClr-90 according to the current theme
        var baseClr90 = getComputedStyle(document.documentElement).getPropertyValue('--baseClr-90').trim();
        var gradientColor = "linear-gradient(to top, " + rgbaColor + ", " + baseClr90 + ")";
        var elements = document.querySelectorAll('.profile__header, .profile__main, .profile__footer');

        elements.forEach(function(element) {
            element.style.background = gradientColor;
        });
    });
}

function addOpacity(color, opacity) {
    var rgbaComponents = color.match(/\d+/g);
    if (rgbaComponents) {
        rgbaComponents[3] = opacity;
        return "rgba(" + rgbaComponents.join(", ") + ")";
    }
    return color;
}