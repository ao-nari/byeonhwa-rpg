document.addEventListener("DOMContentLoaded", function() {
    var faMenu = document.getElementById('fa_menu');

    if (!faMenu) {
        faMenu = document.createElement('div');
        faMenu.id = 'fa_menu';

        var links = document.querySelectorAll('.rightHeaderLink');
        if (links.length > 0) {
            links[0].parentNode.insertBefore(faMenu, links[0]);

            var container = document.createElement('div');
            links.forEach(function(link) {
                container.appendChild(link);
            });
            faMenu.appendChild(container);
        } else {
            document.body.appendChild(faMenu);
        }
    }

    var additionalHTML = `
            <div class="container__tbtp">
                <div class="tbtp__box"><a href="#" target="_blank">event en cours</a></div>
                <div class="tbtp__box"><a href="f33-annonces" target="_blank"><i class="fa-solid fa-bullhorn"></i></a></div>
                <div class="tbtp__box"><a href="f9-ressources" target="_blank"><i class="fa-solid fa-code"></i></a></div>
                <div class="tbtp__box"><a href="f10-section-invites" target="_blank"><i class="fa-solid fa-circle-question"></i></a></div>
            </div>
    `;
    faMenu.innerHTML += additionalHTML;
});