document.addEventListener("DOMContentLoaded", function() {
    // Initial processing for images and divs
    processImagesAndDivs();

    // Setup MutationObserver to handle dynamic content
    setupMutationObserver();
});

function processImagesAndDivs() {
    replaceImages('img.forum-img');
    replaceImages('.topicslist-img img');
    replaceImages('.favourites__status');
    moveAndReplaceImagesInTopicsList();
}

function setupMutationObserver() {
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === 'childList') {
                processImagesAndDivs();
            }
        });
    });

    // Observe the entire document or specific container if necessary
    observer.observe(document.body, { childList: true, subtree: true });
}

function replaceImages(selector) {
    const elements = document.querySelectorAll(selector);

    elements.forEach(function(element) {
        let cssClass, text, secondPosition = false;
        
        if (element.tagName.toLowerCase() === 'img') {
            const src = element.getAttribute('src');
            
            if (src === 'https://2img.net/i.imgur.com/93Ohe12.png') {
                cssClass = 'new-message';
                text = 'nouveau';
            } else if (src === 'https://2img.net/i.imgur.com/YGBfSrz.png') {
                cssClass = 'old-message';
                text = 'ancien';
            } else {
                return; // Exit if the src does not match known images
            }
        } else if (element.classList.contains('favourites__status')) {
            cssClass = 'status-message';
            text = 'statut';
            secondPosition = true; // Special case for favourites__status
        } else {
            return;
        }

        replaceWithTextDiv(element, cssClass, text, secondPosition);
    });
}

function moveAndReplaceImagesInTopicsList() {
    const rows = document.querySelectorAll('.topicslist_row');

    rows.forEach(function(row) {
        const imgContainer = row.querySelector('.container__tleaut .topicslist-img');
        const lastPostDiv = row.querySelector('.topicslist__lastpost.lastpost');

        if (imgContainer && lastPostDiv) {
            // Move the .topicslist-img element to the last post section
            lastPostDiv.insertBefore(imgContainer, lastPostDiv.firstChild);

            // Replace any images within the moved .topicslist-img element
            replaceImages('.topicslist-img img');
        }
    });
}

function replaceWithTextDiv(element, cssClass, text, secondPosition = false) {
    const newDiv = document.createElement('div');
    newDiv.classList.add(cssClass);
    newDiv.setAttribute('data-uw-rm-alt-original', '');
    newDiv.textContent = text;

    const parentDiv = element.parentNode;
    if (secondPosition) {
        parentDiv.insertBefore(newDiv, parentDiv.children[1]); // Insert as the second child
    } else {
        parentDiv.replaceChild(newDiv, element);
    }
}