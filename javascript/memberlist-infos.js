// date
$(document).ready(function() {
    function reformatDate(dateStr) {
        const today = new Date();
        const months = {
            "Jan": 0, "Fév": 1, "Mar": 2, "Avr": 3, "Mai": 4, "Jun": 5,
            "Juil": 6, "Aoû": 7, "Sep": 8, "Oct": 9, "Nov": 10, "Déc": 11
        };

        if (dateStr.includes("Aujourd'hui")) {
            const timePart = dateStr.split("à")[1].trim();
            const [hours, minutes] = timePart.split(":");
            today.setHours(hours, minutes, 0, 0);
            return today.toLocaleDateString('fr-FR') + ', ' + today.toLocaleTimeString('fr-FR', {
                hour: '2-digit',
                minute: '2-digit'
            });
        } else if (dateStr.includes("Hier")) {
            const yesterday = new Date(today);
            yesterday.setDate(today.getDate() - 1);
            const timePart = dateStr.split("à")[1].trim();
            const [hours, minutes] = timePart.split(":");
            yesterday.setHours(hours, minutes, 0, 0);
            return yesterday.toLocaleDateString('fr-FR') + ', ' + yesterday.toLocaleTimeString('fr-FR', {
                hour: '2-digit',
                minute: '2-digit'
            });
        } else {
            const [dayPart, timePart] = dateStr.split(" - ");
            const [dayOfWeek, day, month, year] = dayPart.split(" ");
            const [hours, minutes] = timePart.trim().split(":");
            const parsedDate = new Date(year, months[month], day, hours, minutes);
            return parsedDate.toLocaleDateString('fr-FR') + ', ' + parsedDate.toLocaleTimeString('fr-FR', {
                hour: '2-digit',
                minute: '2-digit'
            });
        }
    }

    $('.ul_visit').each(function() {
        const originalDate = $(this).text();
        const formattedDate = reformatDate(originalDate);
        $(this).text(formattedDate);
    });
});

// filters 
document.addEventListener('DOMContentLoaded', function() {
    var select = document.querySelector('select[name="mode"]');
    
    if (select) {
        var optionsToRemove = ["Humeur", "Site Web", "Groupes", "Points"];
        
        for (var i = select.options.length - 1; i >= 0; i--) {
            var option = select.options[i];
            
            if (optionsToRemove.includes(option.text.trim())) {
                select.remove(i);
            }
        }

        if (select.options.length > 0) {
            select.remove(select.options.length - 1);
        }
    }
});

document.addEventListener('DOMContentLoaded', () => {
    // Function to convert RGB color to RGBA with specified opacity
    function rgbToRgba(rgb, opacity) {
        const rgbValues = rgb.match(/\d+/g).map(Number);
        return `rgba(${rgbValues[0]}, ${rgbValues[1]}, ${rgbValues[2]}, ${opacity})`;
    }

    // Function to update the background color of userlist_hover
    function updateUserProfileBackground() {
        // Get all elements with the class 'userlist_profil'
        const profiles = document.querySelectorAll('.userlist_profil');

        profiles.forEach(profile => {
            // Get the color from the span element inside the profile
            const groupNameElement = profile.querySelector('span.userlist_pseudo a > span > strong');
            
            if (groupNameElement) {
                // Get the computed style of the group name element to retrieve the color
                const groupNameColor = window.getComputedStyle(groupNameElement).color;

                // Debugging: Log the color to ensure it's correct
                console.log('Group Name Color:', groupNameColor);
                
                // Convert the RGB color to RGBA with specific opacity
                const profileBackgroundColor = rgbToRgba(groupNameColor, 0.5); // Adjust opacity as needed

                // Get the userlist_hover element
                const hoverElement = profile.querySelector('.userlist_hover');
                
                if (hoverElement) {
                    // Set the background color of userlist_hover to the RGBA color
                    hoverElement.style.backgroundColor = profileBackgroundColor;

                    // Debugging: Log the final background color
                    console.log('Profile Background Color:', profileBackgroundColor);
                }
            }
        });
    }

    // Call the function after content is fully loaded
    updateUserProfileBackground();
});