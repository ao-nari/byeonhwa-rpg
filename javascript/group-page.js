document.addEventListener('DOMContentLoaded', () => {
    // Define a mapping of group names to image URLs
    const imageMap = {
        'gyeoul': 'https://i.imgur.com/Rr37yrZ.png',
        'akma': 'https://i.imgur.com/xQUC6TY.png',
        'yeoreum': 'https://i.imgur.com/ekyfrC2.png',
        'munoehan': 'https://i.imgur.com/likkWoa.png',
        'bom': 'https://i.imgur.com/yOf6S7V.png',
        'gaeul': 'https://i.imgur.com/a2azgJk.png'
    };

    // Function to update images based on group name
    function updateImages() {
        // Get the group name from the element with class 'group_name'
        const groupNameElement = document.querySelector('.group_name');
        const groupName = groupNameElement ? groupNameElement.textContent.trim().toLowerCase() : '';

        // Update bodygroup-image
        const bodyGroupImage = document.querySelector('.bodygroup-image');
        if (bodyGroupImage) {
            bodyGroupImage.src = imageMap[groupName] || 'default_image_url.jpg';
        }

        // Update group-image elements
        const groupImages = document.querySelectorAll('.group-image');
        groupImages.forEach(groupImage => {
            // Find the group name in the span with class 'grouplist_groupname'
            const groupNameAnchor = groupImage.closest('.grouplist_group').querySelector('.grouplist_groupname a');
            if (groupNameAnchor) {
                const groupNameFromAnchor = groupNameAnchor.textContent.trim().toLowerCase();
                groupImage.src = imageMap[groupNameFromAnchor] || 'default_image_url.jpg';
            }
        });
    }

    // Call the function to update images
    updateImages();
});

document.addEventListener('DOMContentLoaded', () => {
    // Define a mapping of names to colors
    const colorMap = {
        'munoehan': '#706BD0',
        'gyeoul': '#539D9F',
        'akma': '#B84654',
        'bom': '#BC6A8C',
        'yeoreum': '#66A465',
        'gaeul': '#D36E43',
        'byeonhwa': '#B4B34F'
    };

    // Function to apply colors based on text content
    function applyColors() {
        // Get all anchor tags within the specified class
        const links = document.querySelectorAll('.gl_in a');

        links.forEach(link => {
            // Get the text content, trim spaces, and convert to lowercase
            const textContent = link.textContent.trim().toLowerCase();

            // Check if the text content exists in the colorMap
            if (colorMap[textContent]) {
                // Set the text color of the link
                link.style.color = colorMap[textContent];
            }
        });
    }

    // Function to hide elements with specific text content
    function hideElements() {
        // Get all anchor tags within the specified class
        const links = document.querySelectorAll('.gl_in a');

        links.forEach(link => {
            // Get the text content, trim spaces, and convert to lowercase
            const textContent = link.textContent.trim().toLowerCase();

            // Hide the element if the text content is "administrateurs"
            if (textContent === 'administrateurs') {
                link.style.display = 'none'; // Hide the element
            }
        });
    }

    // Apply colors and hide elements after the content is fully loaded or updated
    applyColors();
    hideElements();
});

document.addEventListener('DOMContentLoaded', () => {
    // Define the group names that should be hidden
    const hiddenGroups = ['administrateurs', 'modérateurs', 'byeonhwa'];

    // Function to hide specific groups based on group name
    function hideGroups() {
        // Get all elements with class 'grouplist_group'
        const groups = document.querySelectorAll('.grouplist_group');

        groups.forEach(group => {
            // Get the group name from the anchor tag
            const anchor = group.querySelector('a');
            if (anchor) {
                const groupName = anchor.textContent.trim().toLowerCase();

                // Check if the group name is in the hiddenGroups list
                if (hiddenGroups.includes(groupName)) {
                    // Hide the entire group
                    group.style.display = 'none';
                }
            }
        });
    }

    // Call the function after content is fully loaded
    hideGroups();
});

document.addEventListener('DOMContentLoaded', () => {
    function updateMemberText() {
        // Select all elements with the class 'grouplist_members'
        const memberElements = document.querySelectorAll('.grouplist_members');

        memberElements.forEach(element => {
            // Get the current text content and trim any extra spaces
            let textContent = element.textContent.trim();

            // Match and extract the number from the text
            const match = textContent.match(/\d+/);
            if (match) {
                // Extract the number and set the new text content
                const number = match[0];
                element.textContent = number;

                // Ensure the CSS pseudo-element is applied
                element.classList.add('grouplist_members');
            }
        });
    }

    // Call the function after content is fully loaded
    updateMemberText();
});

document.addEventListener('DOMContentLoaded', () => {
    // Define a mapping of group names to personalized sentences
    const sentenceMap = {
        'akma': 'démons',
        'gyeoul': 'clan hivernal',
        'gaeul': 'clan automnal',
        'bom': 'clan printanier',
        'yeoreum': 'clan estival',
        'munoehan': 'vagabonds'
    };

    // Function to update group sentences based on group name
    function updateGroupSentences() {
        // Get all elements with the class 'grouplist_group'
        const groups = document.querySelectorAll('.grouplist_group');

        groups.forEach(group => {
            // Get the group name from the anchor tag
            const anchor = group.querySelector('.grouplist_groupname a');
            const groupName = anchor ? anchor.textContent.trim().toLowerCase() : '';

            // Get the span to insert the personalized sentence into
            const sentenceSpan = group.querySelector('.grouplist_groupleg');

            // Check if the group name exists in the sentenceMap
            if (sentenceMap[groupName]) {
                // Set the personalized sentence
                sentenceSpan.textContent = sentenceMap[groupName];
            } else {
                // Clear the span if no matching group name is found
                sentenceSpan.textContent = '';
            }
        });
    }

    // Call the function after content is fully loaded
    updateGroupSentences();
});

document.addEventListener('DOMContentLoaded', () => {
    // Function to convert RGB color to RGBA with 0.2 opacity
    function rgbToRgba(rgb) {
        const rgbValues = rgb.match(/\d+/g).map(Number);
        return `rgba(${rgbValues[0]}, ${rgbValues[1]}, ${rgbValues[2]}, 0.2)`;
    }

    // Function to update the --glclr variable based on group name color
    function updateGroupColor() {
        // Get all elements with the class 'grouplist_group'
        const groups = document.querySelectorAll('.grouplist_group');

        groups.forEach(group => {
            // Get the group name link
            const anchor = group.querySelector('.grouplist_groupname a');
            
            // Get the computed style of the anchor element to retrieve the color
            const groupNameColor = window.getComputedStyle(anchor).color;
            
            // Convert the RGB color to RGBA with 0.2 opacity
            const groupColorRgba = rgbToRgba(groupNameColor);

            // Set the --glclr variable to the RGBA color
            group.style.setProperty('--glclr', groupColorRgba);
        });
    }

    // Call the function after content is fully loaded
    updateGroupColor();
});

document.addEventListener('DOMContentLoaded', () => {
    // Select all elements with the class 'grouplist_members_count'
    const memberElements = document.querySelectorAll('.grouplist_members_count');

    memberElements.forEach(element => {
        // Retrieve the current value, subtract 1, and update the value
        let memberCount = parseInt(element.textContent, 10);
        if (!isNaN(memberCount)) {
            element.textContent = memberCount - 1;
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Define the colors for each group name
    const groupColors = {
        'bom': '#BC6A8C',
        'yeoreum': '#66A465',
        'gaeul': '#D36E43',
        'gyeoul': '#539D9F',
        'munoehan': '#706BD0',
        'akma': '#B84654'
    };

    // Get the group name element and its value
    const groupNameElement = document.querySelector('.group_name');

    if (groupNameElement) {
        const groupName = groupNameElement.textContent.trim().toLowerCase();

        // Get the color for the group name
        const groupColor = groupColors[groupName];

        // If a color is found, apply it to the group name and group count elements
        if (groupColor) {
            const groupCountElement = document.querySelector('.group_count');
            if (groupCountElement) {
                groupNameElement.style.color = groupColor;
                groupCountElement.style.color = groupColor;
            }
        }
    }
});

document.addEventListener("DOMContentLoaded", function() {
    // Define the texts for each group name
    const groupTexts = {
        'bom': 'clan printanier',
        'gaeul': 'clan automnal',
        'gyeoul': 'clan hivernal',
        'yeoreum': 'clan estival',
        'akma': 'démons',
        'munoehan': 'vagabonds'
    };

    // Get the group name element and its value
    const groupNameElement = document.querySelector('.group_name');

    if (groupNameElement) {
        const groupName = groupNameElement.textContent.trim().toLowerCase();
        const groupText = groupTexts[groupName];

        // If a text is found, set it in the selfin element
        if (groupText) {
            const selfinElement = document.querySelector('.selfin');
            if (selfinElement) {
                selfinElement.textContent = groupText;
            }
        }

        // Get the group count element and its value
        const groupCountElement = document.querySelector('.group_count');
        if (groupCountElement) {
            const groupCount = parseInt(groupCountElement.textContent, 10);

            // Subtract 1 from the group count and update the element's text content
            if (!isNaN(groupCount)) {
                groupCountElement.textContent = groupCount - 1;
            }
        }
    }
});