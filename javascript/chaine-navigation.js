document.addEventListener("DOMContentLoaded", function() {
    var doubleColon = document.querySelector('.navigation_chain');
    if (doubleColon) {
        doubleColon.innerHTML = doubleColon.innerHTML.replace(/::/g, '<i class="fas fa-chevron-right fa-icon"></i>');
    }
});