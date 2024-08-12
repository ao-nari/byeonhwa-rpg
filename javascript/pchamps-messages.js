// PLACEMENT : Sur les sujets

// [SPANISH] by Flerex
// https://flerex.dev/entradas/clases-unicas-a-los-campos-del-miniperfil

// Options, by Monomer
// Possibilité de déplacer un champs dans un autre élément

!function () {

    const settings = {
        semicolon: false, // false = retire les (:) après un nom de champs
        cleanUp: true,

        // GERER LE DEPLACEMENT DES CHAMPS DE PROFIL
        //
        // CIBLER UN CHAMP :
        // - Nom du champ en MINISCULE et SANS ACCENT (exemple : 'message' ou 'date-dinscription') 
        // - Remplacez les espaces par un tiret (exemple : 'etat-civil')
        // - Listez plusieurs champs par une virgule (exemple : 'champ', 'champ')
        //
        // LE DEPLACER :
        // La class de l'élément dans lequel les champs seront déplacés

        move: [
            { fields: ['faceclaim'], target: '.playedby' },
            { fields: ['image-gauche', 'image-centre', 'image-droite'], target: '.hover_imgfields' },
            { fields: ['pseudo', 'pronoms-joueur', 'messages', 'auras'], target: '.hover_pfields' },
            // Add more field and target class pairs here
        ]
    };

    const slugify = str => {
        const from = 'àáäâãåăæçèéëêǵḧìíïîḿńǹñòóöôœøṕŕßśșțùúüûǘẃẍÿź·/_,:;',
            to = 'aaaaaaaaceeeeghiiiimnnnooooooprssstuuuuuwxyz------',
            reg = new RegExp(from.split('').join('|'), 'g');

        return str.trim().toLowerCase()
            .replace(/\s+/g, '-')
            .replace(reg, c => to.charAt(from.indexOf(c)))
            .replace(/&/g, '-and-')
            .replace(/[^\w\-]+/g, '')
            .replace(/\-\-+/g, '-')
            .replace(/^-+/, '')
            .replace(/-+$/, '');
    };

    const hideSemicolon = (label, name) => {
        if (label.firstElementChild)
            label.lastChild.remove();
        else
            label.textContent = name;
    };

    const main = _ => {

        document.querySelectorAll('.user_field').forEach(p => {
            const labelcontainer = p.querySelector('.field_label');
            if (!labelcontainer) return; // Skip if labelcontainer is null

            const label = labelcontainer.querySelector('.label');
            if (!label) return; // Skip if label is null

            const name = label.textContent.replace(/ *: *$/, ''),
                slug = slugify(name);

            p.classList.add('field-' + slug);

            // Check if the current field needs to be moved
            const moveTarget = settings.move.find(item => item.fields.includes(slug));
            if (moveTarget) {
                const moveToElement = p.closest('.post_row').querySelector(moveTarget.target);
                if (moveToElement) {
                    // Prepend the field to the beginning of the target element
                    moveToElement.prepend(p);
                } else {
                    console.warn(`Target element ${moveTarget.target} not found for field ${slug}`);
                }
            }

            if (settings.cleanUp) {
                labelcontainer.textContent = settings.semicolon ? name + ': ' : name;
            } else if (!settings.semicolon) {
                hideSemicolon(label, name);
            }
        });

    };

    document.addEventListener('DOMContentLoaded', main);
}();