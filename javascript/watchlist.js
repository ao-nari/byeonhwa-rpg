document.addEventListener('DOMContentLoaded', function() {
    // Vérifier si l'URL correspond à la page spécifique
    if (window.location.pathname === '/search' && new URLSearchParams(window.location.search).get('search_id') === 'watchsearch') {
        
        // Task 1: Envelopper le panel dans une <section class="watchsearch">
        var panel = document.querySelector('div.panel'); // Ajuster le sélecteur si nécessaire
        
        if (panel) {
            // Créer une nouvelle section avec la classe désirée
            var newSection = document.createElement('section');
            newSection.className = 'watchsearch';
            
            // Trouver l'élément parent du panel
            var parent = panel.parentNode;
            
            // Insérer la nouvelle section avant le panel
            parent.insertBefore(newSection, panel);
            
            // Déplacer le panel dans la nouvelle section
            newSection.appendChild(panel);
        }

        // Task 2: Envelopper le <h1 class="page-title"> dans un <div class="container__title">
        var pageTitle = document.querySelector('h1.page-title');

        if (pageTitle) {
            // Créer un nouveau div avec la classe désirée
            var containerDiv = document.createElement('div');
            containerDiv.className = 'container__title'; // Nommer la classe comme souhaité
            
            // Trouver l'élément parent du <h1>
            var parent = pageTitle.parentNode;
            
            // Insérer le nouveau div avant le <h1>
            parent.insertBefore(containerDiv, pageTitle);
            
            // Déplacer le <h1> dans le nouveau div
            containerDiv.appendChild(pageTitle);
            
            // Déplacer <p class="right-box"> et <fieldset class="submit-buttons"> dans le div container__title
            var rightBox = document.querySelector('p.right-box');
            var submitButtons = document.querySelector('fieldset.submit-buttons');
            // Déplacer container__title dans le form
            var watchsearchForm = document.querySelector('form[action="/search?search_id=watchsearch"]'); 
            // Déplacer le <p> dans container__title
            var textConfirm = watchsearchForm.querySelector('p'); 
            
            if (rightBox) {
                containerDiv.appendChild(rightBox);
            }
          
            if (textConfirm) {
                containerDiv.appendChild(textConfirm);
            }
            
            if (submitButtons) {
                containerDiv.appendChild(submitButtons);
            }
          
            if (containerDiv) {
                watchsearchForm.prepend(containerDiv);
            } 
        }
    }
});