document.addEventListener('DOMContentLoaded', function() {
    // Fonction pour convertir la valeur RGB en hexadécimal
    function rgbToHex(rgb) {
        if (rgb.startsWith('#')) {
            return rgb.toLowerCase();
        }

        const rgbValues = rgb.match(/\d+/g);
        return '#' + rgbValues.map(v => {
            const hex = parseInt(v).toString(16);
            return hex.length === 1 ? '0' + hex : hex;
        }).join('').toLowerCase();
    }

    // Fonction pour obtenir le code hex d'une variable CSS
    function groupClr(propertyName) {
        const color = getComputedStyle(document.documentElement).getPropertyValue(propertyName).trim();
        return color.startsWith('rgb') ? rgbToHex(color) : color.toLowerCase();
    }

    // Fonction pour changer la citation du rang en accord avec le groupe (couleur)
    function changeRankQuote() {
        const profileHeaders = document.querySelectorAll('.profile_header');

        profileHeaders.forEach(profileHeader => {
            const postPseudo = profileHeader.querySelector('.post_pseudo');
            const name = postPseudo.querySelector('span');

            let rank = profileHeader.nextElementSibling;
            while (rank && !rank.classList.contains('post_rank')) {
                rank = rank.nextElementSibling;
            }

            let color = '';
            if (name) {
                const style = getComputedStyle(name);
                color = style.color ? rgbToHex(style.color) : '';
            }

            let quote = '';

            if (color === groupClr('--bh')) {
                quote = "<span class=\"qrank\">woven in the cycle of seasons</span>";
            } else if (color === groupClr('--bom')) {
                quote = "<span class=\"qrank\">blossomed in spring's embrace</span>";
            } else if (color === groupClr('--yeo')) {
                quote = "<span class=\"qrank\">ignited in summer's colours</span>";
            } else if (color === groupClr('--gaeul')) {
                quote = "<span class=\"qrank\">transformed in fall's whispers</span>";
            } else if (color === groupClr('--gyeoul')) {
                quote = "<span class=\"qrank\">shaped in winter's silence</span>";
            } else if (color === groupClr('--akma')) {
                quote = "<span class=\"qrank\">cursed in the void's hunger</span>";
            } else if (color === groupClr('--mun')) {
                quote = "<span class=\"qrank\">reborn an unchained nomad</span>";
            } else if (color === '') {
                quote = "<span class=\"qrank\">sprouted in nature's glow</span>";
            } else {
                quote = "<span class=\"qrank\">couleur non trouvée</span>";
            }

            // Ajoute la citation au rang correspondant
            if (rank) {
                rank.innerHTML += ' ' + quote;
            }
        });
    }

    changeRankQuote();
});