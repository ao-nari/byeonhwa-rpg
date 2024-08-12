document.addEventListener('DOMContentLoaded', () => {
    const accordions = document.querySelectorAll('.accordion');

    accordions.forEach(accordion => {
        const accordionId = accordion.getAttribute('data-accordion');
        const items = accordion.querySelectorAll(`.a-item[data-accordion-item="${accordionId}"]`);

        // set first item as active if no item is active
        if (items.length > 0 && !accordion.querySelector('.a-item.active')) {
            items[0].classList.add('active');
        }

        items.forEach(item => {
            const header = item.querySelector('.a-header');

            header.addEventListener('click', () => {
                const isActive = item.classList.contains('active');

                // if the clicked item is active, do nothing
                if (isActive) return;

                // close all items
                items.forEach(i => {
                    i.classList.remove('active');
                });

                // open clicked item
                item.classList.add('active');
            });
        });
    });
});