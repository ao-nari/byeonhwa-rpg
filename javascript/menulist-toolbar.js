document.addEventListener('DOMContentLoaded', () => {
    const menuListElement = document.getElementById('fa_menulist');
    if (menuListElement) {
        menuListElement.remove();
    }

    const welcomeElement = document.getElementById('fa_welcome');
    if (welcomeElement) {
        welcomeElement.addEventListener('click', (e) => {
            e.preventDefault();
        });
    }
});