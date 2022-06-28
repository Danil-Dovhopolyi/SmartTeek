export default function hideCard() {
  setTimeout(function () {
    for (let elem of document.getElementsByClassName('game__cardText')) {
      elem.style.visibility = 'hidden';
    }
  }, 8000);
}
