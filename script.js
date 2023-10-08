let likeCount = 0;
let dislikeCount = 0;
let commentCount = 0;

function toggleLike() {

  document.getElementById("dislike-btn").classList.remove("deneme")
  document.getElementById("like-btn").classList.add("deneme")
  Array.from(likeCountSpans).forEach(span => span.textContent = likeCount);
}

function toggleDislike() {

  document.getElementById("like-btn").classList.remove("deneme")
  document.getElementById("dislike-btn").classList.add("deneme")
  Array.from(dislikeCountSpans).forEach(span => span.textContent = dislikeCount);
}




function toggleMoreModal() {
  const moreModals = document.getElementsByClassName('moreModal');
  Array.from(moreModals).forEach(modal => modal.style.display = (modal.style.display === 'block') ? 'none' : 'block');
}
const shortsElements = videoContainer.getElementsByClassName('shorts');
Array.from(shortsElements).forEach(element => {
  element.addEventListener('click', () => {
    toggleLike();
    toggleDislike();
    toggleComment();
    toggleShareModal();
    shareOnWhatsApp();
    shareOnTwitter();
    toggleMoreModal();
  });
});


