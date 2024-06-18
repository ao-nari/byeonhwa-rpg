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
        const names = document.querySelectorAll('.post_pseudo span[style]'); 

        names.forEach(name => {
            const postPseudo = name.closest('.post_pseudo'); 

            let rank = postPseudo.nextElementSibling; 
            while (rank && !rank.classList.contains('post_rank')) {
                rank = rank.nextElementSibling; 
            } 
            
            const style = getComputedStyle(name);
            const color = rgbToHex(style.color);

            let quote = '';

            if (color === groupClr('--bh')) {
                quote = "ceci est un rang administratif";
            } else if (color === groupClr('--bom')) {
                quote = "blossomed in spring's embrace";
            } else if (color === groupClr('--yeo')) {
                quote = "ingited in summer's colours";
            } else if (color === groupClr('--gaeul')) {
                quote = "transformed in fall's whispers";
            } else if (color === groupClr('--gyeoul')) {
                quote = "shaped in winter's silence";
            } else if (color === groupClr('--akma')) {
                quote = "<span class=\"qrank\">cursed in the void's hunger</span>";
            } else if (color === groupClr('--mun')) {
                quote = "reborn an unchained nomad";
            } else {
                quote = "ceci est un rang invité";
            }

            // Ajoute la citation au rang correspondant
            rank.innerHTML += ' ' + quote;
        });
    }

    changeRankQuote();
});
