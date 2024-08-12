document.addEventListener('DOMContentLoaded', function() {
    // Obtenez l'URL actuelle
    let currentURL = window.location.pathname;

    // Vérifiez si l'URL correspond au motif "/sta/uX"
    let userPagePattern = /^\/sta\/u\d+$/;

    if (userPagePattern.test(currentURL)) {
        // Envelopper le contenu du div #wrapper dans une section .stauser
        let wrapperDiv = document.getElementById('wrapper');

        if (wrapperDiv) {
            let stauserSection = document.createElement('section');
            stauserSection.className = 'stauser';

            while (wrapperDiv.firstChild) {
                stauserSection.appendChild(wrapperDiv.firstChild);
            }

            wrapperDiv.parentNode.replaceChild(stauserSection, wrapperDiv);
        }

        // Envelopper <h1 class="page-title"> dans un div .container__title
        let pageTitle = document.querySelector('h1.page-title');

        if (pageTitle) {
            let containerTitleDiv = document.createElement('div');
            containerTitleDiv.className = 'container__title';

            let container = pageTitle.closest('div.container');
            if (container) {
                container.insertBefore(containerTitleDiv, pageTitle);
                containerTitleDiv.appendChild(pageTitle);
            }
        }

        // Englober "topicslist_infos" et "topicslist-stats" dans "topicslist__infos"
        let topicsListInfosElements = document.querySelectorAll('div.topicslist_infos');

        topicsListInfosElements.forEach(function(infoElement) {
            let statsElement = infoElement.nextElementSibling;

            if (statsElement && statsElement.classList.contains('topicslist-stats')) {
                let wrapperDiv = document.createElement('div');
                wrapperDiv.className = 'topicslist__infos';

                // Déplacez infoElement et statsElement dans le nouveau div
                infoElement.parentNode.insertBefore(wrapperDiv, infoElement);
                wrapperDiv.appendChild(infoElement);
                wrapperDiv.appendChild(statsElement);

                // Englober "topic-author" et déplacer sous "topicslist__infos"
                let topicAuthorSpan = wrapperDiv.querySelector('.topic-author');
                if (topicAuthorSpan) {
                    let authorWrapper = document.createElement('div');
                    authorWrapper.className = 'topicslist__author';

                    // Déplacez topicAuthorSpan dans authorWrapper
                    topicAuthorSpan.parentNode.insertBefore(authorWrapper, topicAuthorSpan);
                    authorWrapper.appendChild(topicAuthorSpan);

                    // Déplacez authorWrapper après topicslist__infos
                    wrapperDiv.parentNode.insertBefore(authorWrapper, wrapperDiv.nextSibling);
                }
            }
        });

        // Créer un seul "div.container__topics" et englober tous les "topicslist_row"
        let topicsListRows = document.querySelectorAll('div.topicslist_row');

        if (topicsListRows.length > 0) {
            // Créez un nouvel élément div avec la classe "container__topics"
            let containerTopicsDiv = document.createElement('div');
            containerTopicsDiv.className = 'container__topics';

            // Trouvez le conteneur parent des rows
            let parentDiv = topicsListRows[0].parentNode;

            // Insérez le div.container__topics avant le premier topicslist_row
            parentDiv.insertBefore(containerTopicsDiv, topicsListRows[0]);

            // Déplacez tous les topicslist_row dans le container__topics
            topicsListRows.forEach(function(row) {
                containerTopicsDiv.appendChild(row);
            });
        }

        // Remplacer "topicslist-lastpost" par "topicslist__lastpost"
        let lastPostElements = document.querySelectorAll('div.topicslist-lastpost');

        lastPostElements.forEach(function(lastPostElement) {
            lastPostElement.classList.remove('topicslist-lastpost');
            lastPostElement.classList.add('topicslist__lastpost');
        });

        // Ajouter la classe "lastpost" à chaque "topicslist__lastpost"
        let updatedLastPostElements = document.querySelectorAll('div.topicslist__lastpost');

        updatedLastPostElements.forEach(function(lastPostElement) {
            lastPostElement.classList.add('lastpost');

            // Créez un div "lastpost-in" à l'intérieur de chaque "topicslist__lastpost"
            let newLastPostInDiv = document.createElement('div');
            newLastPostInDiv.className = 'lastpost-in';

            // Déplacez tout le contenu de topicslist__lastpost dans le nouveau div
            while (lastPostElement.firstChild) {
                newLastPostInDiv.appendChild(lastPostElement.firstChild);
            }

            // Ajoutez le nouveau div "lastpost-in" à l'intérieur de topicslist__lastpost
            lastPostElement.appendChild(newLastPostInDiv);
        });

        // Envelopper "topicslist-img", "topicslist__infos" et "topicslist__author" dans "container__tleaut"
        let topicsListRowsWithTleaut = document.querySelectorAll('div.topicslist_row');

        topicsListRowsWithTleaut.forEach(function(row) {
            let topicslistImg = row.querySelector('div.topicslist-img');
            let topicslistInfos = row.querySelector('div.topicslist__infos');
            let topicslistAuthor = row.querySelector('div.topicslist__author');

            if (topicslistImg || topicslistInfos || topicslistAuthor) {
                let containerTleautDiv = document.createElement('div');
                containerTleautDiv.className = 'container__tleaut';

                // Créez un nouveau div.container__tleaut pour englober les éléments
                if (topicslistImg) containerTleautDiv.appendChild(topicslistImg);
                if (topicslistInfos) containerTleautDiv.appendChild(topicslistInfos);
                if (topicslistAuthor) containerTleautDiv.appendChild(topicslistAuthor);

                // Insérez container__tleaut avant le premier élément dans topicslist_row
                row.insertBefore(containerTleautDiv, row.firstChild);
            }
        });

        // Envelopper "topic-type" et "topictitle" dans "infos-titre"
        let topicsListInfosDivs = document.querySelectorAll('div.topicslist__infos');

        topicsListInfosDivs.forEach(function(infoElement) {
            let topicType = infoElement.querySelector('span.topic-type');
            let topicTitle = infoElement.querySelector('a.topictitle');

            if (topicType && topicTitle) {
                // Créez un div pour englober les éléments
                let infosTitreDiv = document.createElement('div');
                infosTitreDiv.className = 'infos-titre';

                // Déplacez topicType et topicTitle dans infosTitreDiv
                infosTitreDiv.appendChild(topicType);
                infosTitreDiv.appendChild(topicTitle);

                // Assurez-vous que l'élément est inséré correctement dans topicslist__infos
                infoElement.insertBefore(infosTitreDiv, infoElement.querySelector('div.topicslist-stats') || infoElement.firstChild);
            }
        });

        // Reformater "topicslist-stats"
        let statsElements = document.querySelectorAll('div.topicslist-stats');

        statsElements.forEach(function(statsElement) {
            // Séparez le texte par les balises <br>
            let textContent = statsElement.innerHTML.split('<br>').map(s => s.trim());
            
            // Extraire les nombres et labels
            let responses = textContent[0].split(' ')[0];
            let views = textContent[1].split(' ')[0];

            // Créez le nouveau contenu formaté
            let formattedContent = `
                <strong>${responses}</strong>&nbsp;Réponses&nbsp;•••&nbsp;
                <strong>${views}</strong>&nbsp;Vues
            `;

            // Remplacez le contenu de l'élément
            statsElement.innerHTML = formattedContent;
        });
    }
});