document.addEventListener("DOMContentLoaded", function() {
    const posts = document.querySelectorAll('.post');

    posts.forEach(post => {
        if (post.querySelector('.bh_admin')) {
            const container = post.querySelector('.container__post');

            if (container) {
                const avatar = post.querySelector('.post_avatar');
                const pseudo = post.querySelector('.post_pseudo');
                const rank = post.querySelector('.post_rank');

                const containerPR = document.createElement('div');
                containerPR.classList.add('container__pr');

                const containerSprofile = document.createElement('div');
                containerSprofile.classList.add('container__sprofile');

                if (pseudo) containerPR.appendChild(pseudo);
                if (rank) containerPR.appendChild(rank);

                if (avatar) containerSprofile.appendChild(avatar);
                containerSprofile.appendChild(containerPR);

                container.insertBefore(containerSprofile, container.firstChild);
            }
        }
    });
});