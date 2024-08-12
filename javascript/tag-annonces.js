document.addEventListener('DOMContentLoaded', () => {
    // Select all elements with the class 'topic-type'
    const topicTypes = document.querySelectorAll('.topic-type');

    // Loop through each element
    topicTypes.forEach((topicType) => {
        // Trim the content to remove any surrounding whitespace
        const content = topicType.innerHTML.trim();

        // Only wrap with <evid2> if there is text content
        if (content) {
            topicType.innerHTML = `<evid2>${content}</evid2>`;
        }
    });
});