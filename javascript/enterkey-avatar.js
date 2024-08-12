document.addEventListener('DOMContentLoaded', function() {
    // validate url format
    function validateUrl(url) {
        const pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
            '([a-zA-Z\\d-]+\\.)+[a-zA-Z]{2,}' + // domain
            '(\\:\\d+)?' + // port
            '(\\/[-a-zA-Z\\d%_.~+]*)*' + // path
            '(\\?[;&a-zA-Z\\d%_.~+=-]*)?' + // query string
            '(\\#[-a-zA-Z\\d_]*)?$','i'); // fragment
        return pattern.test(url);
    }

    // handle enter key
    const avatarInput = document.querySelector('input[name="avatarremoteurl"]');
    const submitButton = document.querySelector('input[type="submit"][value="Enregistrer"]');
    if (avatarInput && submitButton) {
        avatarInput.addEventListener('keydown', function(event) {
            if (event.key === 'Enter') {
                event.preventDefault();
                if (validateUrl(avatarInput.value)) {
                    submitButton.click(); // trigger submit button click
                } else {
                    alert('invalid url. please enter a valid image url.');
                }
            }
        });
    }
});