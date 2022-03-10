window.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('#buttonList > li > button');

  // Hamburger
  const hamburger = document.querySelector('.header__hamburger');
  const navMenu = document.querySelector('.header__list');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
  });
  document.querySelectorAll('.header__list > li').forEach((n) =>
    n.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
    })
  );

  // Slider
  const getData = () => [
    { imgSrc: './assets/img/circle1.png' },
    { imgSrc: './assets/img/circle2.png' },
    { imgSrc: './assets/img/circle3.png' },
    { imgSrc: './assets/img/circle4.png' },
    { imgSrc: './assets/img/circle5.png' },
    { imgSrc: './assets/img/circle6.png' },
    { imgSrc: './assets/img/circle7.png' },
    { imgSrc: './assets/img/circle8.png' },
  ];

  const randomize = () => {
    const cardData = getData();
    cardData.sort(() => Math.random() - 0.5);
    return cardData;
  };

  const photoGenerator = () => {
    const cardData = randomize();
    const photoActive = document.querySelector('.feedback__photo-active');

    for (let i = 0; i < cardData.length; i++) {
      let src = Object.values(cardData[i]).join('');
      console.log(src);
      photoActive.innerHTML = `
        <img src="${src}" alt="photo">
        `;
    }
  };

  photoGenerator();
});
