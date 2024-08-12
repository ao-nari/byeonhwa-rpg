document.addEventListener("DOMContentLoaded", function() {
    if (window.location.pathname === '/search' && new URLSearchParams(window.location.search).get('search_id') === 'favouritesearch') {
        let panelDiv = document.querySelector('div.panel');
        if (panelDiv) {
            let section = document.createElement('section');
            section.className = 'favouritesearch';
            panelDiv.parentNode.insertBefore(section, panelDiv);
            section.appendChild(panelDiv);
        }

        let rightBox = document.querySelector('p.right-box');
        let pageTitle = document.querySelector('h1.page-title');
        let submitButtons = document.querySelector('fieldset.submit-buttons');
        
        if (rightBox && pageTitle && submitButtons) {
            let favouritesTle = document.createElement('div');
            favouritesTle.className = 'favourites__tle';
            pageTitle.parentNode.insertBefore(favouritesTle, pageTitle);
            favouritesTle.appendChild(pageTitle);
            
            let favouritesSubtle = document.createElement('div');
            favouritesSubtle.className = 'favourites__subtle';
            favouritesTle.appendChild(favouritesSubtle);
            favouritesSubtle.appendChild(rightBox);
            favouritesSubtle.appendChild(submitButtons);
            
            let submitButton = submitButtons.querySelector('input[type="submit"]');
            if (submitButton) {
                submitButton.value = 'supprimer';
            }
            
            let numericValue = pageTitle.textContent.match(/\d+/);
            if (numericValue) {
                pageTitle.textContent = numericValue[0];
            }
        }

        let table = document.querySelector('table.table1');
        if (table) {
            let postsContainer = document.createElement('div');
            postsContainer.className = 'posts';

            table.querySelectorAll('tr').forEach(row => {
                let postsCell = row.querySelector('td.posts');
                if (postsCell) {
                    let postDiv = document.createElement('div');
                    postDiv.className = 'post';
                    postDiv.innerHTML = postsCell.innerHTML;

                    let checkbox = postDiv.querySelector('input[type="checkbox"]');
                    if (checkbox) {
                        checkbox.className = 'checkbox';
                    }

                    let img = postDiv.querySelector('img');
                    if (img) {
                        img.className = 'favourites__status';
                    }

                    postsContainer.appendChild(postDiv);
                }
            });

            table.parentNode.insertBefore(postsContainer, table);
            table.remove();
        }

        document.querySelectorAll('div.post').forEach(postDiv => {
            let postDetails = postDiv.querySelector('div.postdetails');
            if (postDetails) {
                let lines = postDetails.querySelectorAll('div');
                let links = postDetails.querySelectorAll('a');
                
                if (lines.length > 0) {
                    let reponsesDiv = lines[0];
                    reponsesDiv.classList.add('reponses');
                    reponsesDiv.textContent = reponsesDiv.textContent.replace(/réponses\s*:/i, '').trim();
                }
                if (lines.length > 1) {
                    let auteurDiv = lines[1];
                    auteurDiv.classList.add('auteur');
                    auteurDiv.innerHTML = auteurDiv.innerHTML.replace(/auteur\s*:/i, '').trim();
                    
                    let authorLink = postDetails.querySelector('a');
                    if (authorLink) {
                        auteurDiv.style.color = getComputedStyle(authorLink).color;
                    }
                }
                if (lines.length > 2) {
                    let vuesDiv = lines[2];
                    vuesDiv.classList.add('vues');
                    vuesDiv.textContent = vuesDiv.textContent.replace(/vues\s*:/i, '').trim();
                }
                
                if (links.length > 1) {
                    links[1].classList.add('topicforum');
                }

                let topictleDiv = document.createElement('div');
                topictleDiv.className = 'favourites__topictle';
                
                let topicTitleLink = postDetails.querySelector('a.topictitle');
                let img = postDiv.querySelector('img.favourites__status');
                
                if (topicTitleLink) {
                    topictleDiv.appendChild(topicTitleLink);
                }
                
                if (img) {
                    topictleDiv.appendChild(img);
                }
                
                postDetails.insertBefore(topictleDiv, postDetails.firstChild);

                let topiclegDiv = document.createElement('div');
                topiclegDiv.className = 'favourites__topicleg';
                
                let auteurDiv = postDetails.querySelector('div.auteur');
                let topicForumLink = postDetails.querySelector('a.topicforum');
                let reponsesDiv = postDetails.querySelector('div.reponses');
                let vuesDiv = postDetails.querySelector('div.vues');
                
                if (auteurDiv) topiclegDiv.appendChild(auteurDiv);
                if (topicForumLink) topiclegDiv.appendChild(topicForumLink);
                if (reponsesDiv) topiclegDiv.appendChild(reponsesDiv);
                if (vuesDiv) topiclegDiv.appendChild(vuesDiv);

                postDetails.insertBefore(topiclegDiv, topictleDiv.nextSibling);

                let hrAfterTopictle = document.createElement('hr');
                postDetails.insertBefore(hrAfterTopictle, topiclegDiv);
            }
        });
    }
});

document.addEventListener("DOMContentLoaded", function() {
    function removeTextFromLastPostInfos() {
        let lastPostInfosDivs = document.querySelectorAll('div.lastpost-infos');
        lastPostInfosDivs.forEach(function(div) {
            div.innerHTML = div.innerHTML.replace(/Derniers Messages\s*:/i, '').trim();
        });
    }

    function wrapInFavouritesFoot() {
        let postDetailsDivs = document.querySelectorAll('div.postdetails');
        postDetailsDivs.forEach(function(postDetailsDiv) {
            let favouritesFootDiv = document.createElement('div');
            favouritesFootDiv.className = 'favourites__foot';
            
            let lastPostInfosDiv = postDetailsDiv.querySelector('div.lastpost-infos');
            let postsDiv = postDetailsDiv.querySelector('div.posts');
            
            if (lastPostInfosDiv) {
                favouritesFootDiv.appendChild(lastPostInfosDiv);
            }
            if (postsDiv) {
                favouritesFootDiv.appendChild(postsDiv);
            }
            
            postDetailsDiv.appendChild(favouritesFootDiv);
        });
    }

    removeTextFromLastPostInfos();
    wrapInFavouritesFoot();
});