document.addEventListener('DOMContentLoaded', function () {
    var likeTextElements = document.querySelectorAll('.like_text');
    likeTextElements.forEach(function (likeTextElement) {
      likeTextElement.innerHTML = '<i class="fa-solid fa-heart"></i>';
    });
  });