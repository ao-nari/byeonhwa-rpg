(function () {
    // Define the settings for field movement
    const settings = {
        semicolon: false, // false = retire les (:) après un nom de champs

        move: [
            { fields: ['field_id2', 'field_id3', 'field_id4'], target: '.headerimages' },
            { fields: ['field_id-5'], target: '#field_id-12' },
            { fields: ['field_id15', 'field_id16', 'field_id17', 'field_id28', 'field_id18', 'field_id19', 'field_id20'], target: '.profile__charin .charin-overflow' },
            { fields: ['field_id-6'], target: '.profile__messages' },
            { fields: ['field_id-13'], target: '.profile__auras' },
            { fields: ['field_id14'], target: '.profile__dialogues' },
            { fields: ['field_id11'], target: '#field_id1 .field_content' },
            { fields: ['field_id1', 'field_id12', 'field_id13', 'field_id21', 'field_id22', 'field_id23', 'field_id24', 'field_id-20'], target: '.profile__player .player-overflow' }, 
            { fields: ['field_id25'], target: '.profile__powers .powers-overflow' }, 
            { fields: ['field_id26', 'field_id27'], target: '.profile__more .more-overflow' }
            // Add more field and target class pairs here as needed
        ]
    };

    const hideSemicolon = (label) => {
        if (label.firstElementChild) {
            label.lastChild.remove();
        } else {
            label.textContent = label.textContent.replace(/ *: *$/, '');
        }
    };

    const main = () => {
        settings.move.forEach(moveSetting => {
            // Find the target element
            const targetElement = document.querySelector(moveSetting.target);
            if (targetElement) {
                moveSetting.fields.forEach(fieldId => {
                    // Find the field element by ID
                    const fieldElement = document.getElementById(fieldId);
                    if (fieldElement) {
                        // Move the entire profile_field element to the target container
                        targetElement.appendChild(fieldElement);

                        // Find and process the field label
                        const labelContainer = fieldElement.querySelector('.field_label');
                        if (labelContainer && !settings.semicolon) {
                            hideSemicolon(labelContainer);
                        }
                    }
                });
            }
        });
    };

    // Run the main function when the DOM is fully loaded
    document.addEventListener('DOMContentLoaded', main);
})();