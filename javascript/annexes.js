document.addEventListener("DOMContentLoaded", function() {
    // set default active anchor
    setDefaultActiveAnchor();

    // smooth scroll to an element
    function smoothScrollTo(target) {
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }

    // set active anchor function
    function setActiveAnchor(anchor) {
        // remove active class from all anchors
        document.querySelectorAll('.toc_links a, .post_message.postbody.content a[href^="#"]').forEach(function(a) {
            a.classList.remove('active');
        });
        // add active class to the relevant anchor
        const href = anchor.getAttribute('href');
        document.querySelectorAll(`.toc_links a[href="${href}"], .post_message.postbody.content a[href="${href}"]`).forEach(function(a) {
            a.classList.add('active');
        });
    }

    // handle anchor click
    function handleAnchorClick(event) {
        event.preventDefault();
        const target = this.getAttribute('href');
        const targetElement = document.querySelector(target);

        if (targetElement) {
            const targetBhAnnexe = targetElement.closest('.bh_annexe');
            const currentBhAnnexe = this.closest('.bh_annexe');

            if (targetBhAnnexe && currentBhAnnexe === targetBhAnnexe) {
                // scroll within the internal .annexe_text container
                const container = targetElement.closest('.annexe_text');
                if (container) {
                    container.scrollTo({
                        top: targetElement.offsetTop - container.offsetTop,
                        behavior: 'smooth'
                    });
                }
            } else {
                // scroll to the top of the .bh_annexe container
                if (targetBhAnnexe) {
                    const targetBhAnnexeTop = targetBhAnnexe.getBoundingClientRect().top + window.scrollY;

                    window.scrollTo({
                        top: targetBhAnnexeTop,
                        behavior: 'smooth'
                    });

                    setTimeout(() => {
                        const container = targetElement.closest('.annexe_text');
                        if (container) {
                            container.scrollTo({
                                top: targetElement.offsetTop - container.offsetTop,
                                behavior: 'smooth'
                            });
                        }
                    }, 600);
                }
            }

            // set the active anchor
            setActiveAnchor(this);
        }
    }

    // set default active anchor
    function setDefaultActiveAnchor() {
        // find all .bh_annexe elements
        document.querySelectorAll('.bh_annexe').forEach(function(annexe) {
            // find the first toc anchor within the current .bh_annexe
            const firstAnchor = annexe.querySelector('.toc_links a[href^="#"]');

            if (firstAnchor) {
                // remove the active class from all anchors within this .bh_annexe
                annexe.querySelectorAll('.toc_links a[href^="#"]').forEach(function(anchor) {
                    anchor.classList.remove('active');
                });

                // set the default active anchor in this .bh_annexe
                firstAnchor.classList.add('active');
            }
        });
    }

    // initialize the function
    setDefaultActiveAnchor();

    // click event listener for TOC anchors (unchanged)
    document.querySelectorAll('.toc_links a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', handleAnchorClick);
    });

    // click event listener for basic anchors within .post_message.postbody.content
    document.querySelectorAll('.post_message.postbody.content a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', handleAnchorClick);
    });

    // scroll event listener for .annexe_text containers
    document.querySelectorAll('.annexe_text').forEach(function(container) {
        container.addEventListener('scroll', function() {
            updateActiveAnchorInContainer(container);
        });
    });

    // update active anchor based on scroll position within a specific container
    function updateActiveAnchorInContainer(container) {
        const containerRect = container.getBoundingClientRect();
        let mostVisibleSection = null;
        let highestVisibility = -Infinity;

        container.querySelectorAll('.annexe_section').forEach(function(section) {
            const sectionRect = section.getBoundingClientRect();
            const sectionHeight = sectionRect.bottom - sectionRect.top;

            // calculate visibility as the ratio of the section's height that is within the container
            const visibleTop = Math.max(sectionRect.top, containerRect.top);
            const visibleBottom = Math.min(sectionRect.bottom, containerRect.bottom);
            const visibleHeight = Math.max(0, visibleBottom - visibleTop);

            // update the most visible section
            if (visibleHeight / sectionHeight > highestVisibility) {
                highestVisibility = visibleHeight / sectionHeight;
                mostVisibleSection = section;
            }
        });

        if (mostVisibleSection) {
            // find the anchor associated with the most visible section
            const sectionId = mostVisibleSection.querySelector('h2') ? mostVisibleSection.querySelector('h2').id : '';
            const activeAnchor = document.querySelector(`.toc_links a[href="#${sectionId}"], .post_message.postbody.content a[href="#${sectionId}"]`);
            if (activeAnchor) {
                setActiveAnchor(activeAnchor);
            }
        }
    }
});