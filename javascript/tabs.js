document.addEventListener('DOMContentLoaded', function () {
    const tabsContainers = document.querySelectorAll('.tabs-container, .nested-tabs-container');

    tabsContainers.forEach(container => {
        const isNested = container.classList.contains('nested-tabs-container');
        const tabs = container.querySelectorAll(isNested ? '.nested-tabs a' : '.tabs a');
        const tabContents = container.querySelectorAll(isNested ? '.nested-tabs-content > div' : '.tabs-content > div');

        tabs.forEach(tab => {
            tab.addEventListener('click', function (event) {
                event.preventDefault();

                const targetContentId = tab.getAttribute('href').substring(1);
                const targetContent = container.querySelector(`#${targetContentId}`);

                tabs.forEach(t => t.classList.remove('active'));
                tabContents.forEach(content => content.classList.remove('active'));

                tab.classList.add('active');

                if (targetContent) {
                    targetContent.classList.add('active');
                }

                const systemId = container.getAttribute('data-system');
                window.location.hash = `${systemId}-${targetContentId}`;
            });
        });

        // ID SYSTEM uniques
        const activateTabFromHash = () => {
            const initialFragment = window.location.hash.substring(1);
            if (initialFragment) {
                const [systemId, targetContentId] = initialFragment.split('-');
                if (systemId === container.getAttribute('data-system')) {
                    const targetTab = container.querySelector(isNested ? `.nested-tabs a[href="#${targetContentId}"]` : `.tabs a[href="#${targetContentId}"]`);
                    if (targetTab) {
                        targetTab.click();
                    }
                }
            }
        };

        // active la page on URL hash
        activateTabFromHash();

        // active la page si le hash change
        window.addEventListener('hashchange', activateTabFromHash);
    });
});