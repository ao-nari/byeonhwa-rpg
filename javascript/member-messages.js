document.addEventListener('DOMContentLoaded', function() {
    // Obtenez l'URL actuelle
    let currentURL = window.location.pathname;

    // Vérifiez si l'URL correspond au motif "/spa/uX" ou "/spa/uX/10"
    let userPagePattern = /^\/spa\/u\d+\/?\d*$/;

    if (userPagePattern.test(currentURL)) {
        // Étape 1 : Envelopper le contenu du div #wrapper dans une section .spauser
        let wrapperDiv = document.getElementById('wrapper');

        if (wrapperDiv) {
            // Créez un nouvel élément section avec la classe "spauser"
            let spauserSection = document.createElement('section');
            spauserSection.className = 'spauser';

            // Déplacez tout le contenu de #wrapper dans la nouvelle section
            while (wrapperDiv.firstChild) {
                spauserSection.appendChild(wrapperDiv.firstChild);
            }

            // Ajoutez la nouvelle section dans #wrapper
            wrapperDiv.appendChild(spauserSection);

            // Déplacez le formulaire à l'intérieur de la section .spauser
            let viewforumForm = document.querySelector('form[action="/viewforum"]');
            if (viewforumForm) {
                spauserSection.appendChild(viewforumForm);
            }
        }

        // Étape 2 : Envelopper <h1 class="page-title"> dans un div .container__title
        let pageTitle = document.querySelector('h1.page-title');

        if (pageTitle) {
            // Créez un nouvel élément div avec la classe "container__title"
            let containerTitleDiv = document.createElement('div');
            containerTitleDiv.className = 'container__title';

            // Insérez le div avant le <h1>
            pageTitle.parentNode.insertBefore(containerTitleDiv, pageTitle);

            // Déplacez le <h1> dans le nouveau div
            containerTitleDiv.appendChild(pageTitle);
        }

        // Étape 3 : Ajouter des classes, réorganiser les spans, et envelopper certains d'entre eux dans des divs spécifiques
        let postsearchInfosElements = document.querySelectorAll('.postsearch_infos');

        postsearchInfosElements.forEach(function(postsearchInfos) {
            let spans = postsearchInfos.querySelectorAll('span');
            if (spans.length >= 6) {
                // Ajouter des classes aux spans spécifiques
                spans[0].classList.add('spatitle');
                spans[1].classList.add('spaauth');
                spans[4].classList.add('spaforum');
                spans[3].classList.add('spadate');

                // Créer un nouveau div avec la classe "spainfos" et y déplacer spaauth, spatitle et spadate
                let spainfosDiv = document.createElement('div');
                spainfosDiv.className = 'spainfos';
                
                spainfosDiv.appendChild(spans[1]); // spaauth
                spainfosDiv.appendChild(spans[0]); // spatitle
                spainfosDiv.appendChild(spans[4]); // spaforum
                spainfosDiv.appendChild(spans[3]); // spadate

                // Insérer le div .spainfos avant le premier span dans .postsearch_infos
                postsearchInfos.insertBefore(spainfosDiv, postsearchInfos.firstChild);

                // Créer un nouveau div avec la classe "spastats" et y déplacer les deux derniers spans
                let spastatsDiv = document.createElement('div');
                spastatsDiv.className = 'spastats';

                spastatsDiv.appendChild(spans[5]);
                spastatsDiv.appendChild(spans[6]);

                // Ajouter le div au DOM après les autres spans
                postsearchInfos.appendChild(spastatsDiv);

                // Étape 4 : Modifier le texte des spans en préservant le HTML interne
                let spaauthSpan = postsearchInfos.querySelector('.spaauth');
                let spatitleSpan = postsearchInfos.querySelector('.spatitle');
                let spaforumSpan = postsearchInfos.querySelector('.spaforum');

                if (spaauthSpan) {
                    // Remplacer "par " par "Posté par " tout en gardant les liens intacts
                    spaauthSpan.innerHTML = spaauthSpan.innerHTML.replace(/^par /, 'Posté par ');
                }
                if (spatitleSpan) {
                    // Remplacer "Sujet : " par "dans " tout en gardant les liens intacts
                    spatitleSpan.innerHTML = spatitleSpan.innerHTML.replace(/^Sujet: /, 'dans ');
                }
                if (spaforumSpan) {
                    // Ajouter des parenthèses autour de "Rechercher dans: " tout en gardant les liens intacts
                    spaforumSpan.innerHTML = spaforumSpan.innerHTML.replace(/^Rechercher dans: /, '(') + ')';
                }
            }
        });

        // Étape 5 : Envelopper <p class="pagination"> et <form action="/viewforum"> dans un div .spafooter
        let paginationP = document.querySelector('p.pagination');
        let viewforumForm = document.querySelector('form[action="/viewforum"]');

        // Créez un nouvel élément div avec la classe "spafooter"
        let spafooterDiv = document.createElement('div');
        spafooterDiv.className = 'spafooter';

        // Déplacez <p class="pagination"> et <form action="/viewforum"> dans le div
        if (paginationP) {
            // Remplacez le contenu du <p class="pagination"> sans affecter les liens
            let paginationHTML = paginationP.innerHTML;
            paginationP.innerHTML = paginationHTML.replace(/•/g, 'voir la page ');

            spafooterDiv.appendChild(paginationP);
        }
        if (viewforumForm) {
            spafooterDiv.appendChild(viewforumForm);
        }

        // Trouver un endroit approprié pour ajouter le div .spafooter
        let insertionPoint = document.querySelector('#wrapper'); // Changer ici si nécessaire
        if (insertionPoint) {
            insertionPoint.appendChild(spafooterDiv);
        }
    }
});