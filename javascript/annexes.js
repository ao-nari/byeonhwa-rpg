document.addEventListener("DOMContentLoaded", function() {
    setDefaultActiveAnchor();

    // scroll to an element smoothly
    function smoothScrollTo(target) {
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }

    // set active anchor function
    function setActiveAnchor(anchor) {
        // remove active class from all anchors
        document.querySelectorAll('.toc_links a').forEach(function(a) {
            a.classList.remove('active');
        });
        // add active class in all toc menus
        const href = anchor.getAttribute('href');
        document.querySelectorAll(`.toc_links a[href="${href}"]`).forEach(function(a) {
            a.classList.add('active');
        });
    }
    
    // anchor click
    function handleAnchorClick(event) {
        event.preventDefault();
        const target = this.getAttribute('href');
        const targetElement = document.querySelector(target);
        
        if (targetElement) {
            const targetBhAnnexe = targetElement.closest('.bh_annexe'); // closest bh_annexe
            const currentBhAnnexe = this.closest('.bh_annexe'); // current visible bh_annexe

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

                    // smoothly scroll to the top of the targetBhAnnexe
                    window.scrollTo({
                        top: targetBhAnnexeTop,
                        behavior: 'smooth'
                    });

                    // scroll within the internal .annexe_text container after external scroll
                    setTimeout(() => {
                        const container = targetElement.closest('.annexe_text');
                        if (container) {
                            container.scrollTo({
                                top: targetElement.offsetTop - container.offsetTop,
                                behavior: 'smooth'
                            });
                        }
                    }, 600); // adjust the timeout based on the duration of the external scroll
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
            // finds the first toc anchor within the current .bh_annexe
            const firstAnchor = annexe.querySelector('.toc_links a[href^="#"]');
    
            if (firstAnchor) {
                // removes the active class from all anchors within this .bh_annexe
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

    // click event listener for anchors
    document.querySelectorAll('.toc_links a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', handleAnchorClick);
    });

    // set active anchors based on scroll position
    window.addEventListener('scroll', function() {
        updateActiveAnchor();
    });

    // internal scroll within .annexe_text
    document.querySelectorAll('.annexe_text').forEach(function(container) {
        container.addEventListener('scroll', function() {
            updateActiveAnchor();
        });
    });

    // update active anchor based on scroll position
    function updateActiveAnchor() {
        document.querySelectorAll('.bh_annexe').forEach(function(annexe) {
            const annexeText = annexe.querySelector('.annexe_text');
            if (annexeText) {
                const containerRect = annexeText.getBoundingClientRect();

                let mostVisibleSection = null;
                let highestVisibility = -Infinity;

                annexeText.querySelectorAll('.annexe_section').forEach(function(section) {
                    const rect = section.getBoundingClientRect();
                    const sectionHeight = rect.bottom - rect.top;

                    // calculate visibility as the ratio of the section's height that is within the container
                    const visibleTop = Math.max(rect.top, containerRect.top);
                    const visibleBottom = Math.min(rect.bottom, containerRect.bottom);
                    const visibleHeight = Math.max(0, visibleBottom - visibleTop);

                    // update the most visible section
                    if (visibleHeight / sectionHeight > highestVisibility) {
                        highestVisibility = visibleHeight / sectionHeight;
                        mostVisibleSection = section;
                    }
                });

                if (mostVisibleSection) {
                    const activeAnchor = document.querySelector(`.toc_links a[href="#${mostVisibleSection.id}"]`);
                    if (activeAnchor) {
                        setActiveAnchor(activeAnchor);
                    }
                }
            }
        });
    }
});