document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll("[data-tab-button]");
  const questions = document.querySelectorAll('[data-faq-question]')
  const heroSection = document.querySelector('.hero');
  const heroHeight = heroSection.clientHeight;


  // show header
  window.addEventListener('scroll', function() {
    const pageHeight = window.scrollY;

    if (pageHeight < heroHeight) {
      hideHeader();
    }
    else {
      showHeader();
    }
  })

  // shows section
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function (botao) {
      const targetTab = botao.target.dataset.tabButton;
      const tab = document.querySelector(`[data-tab-id=${targetTab}]`);
      hideTabs();
      tab.classList.add("shows__list--is-active");
      clearButton();
      botao.target.classList.add("shows__tabs__button--is-active");
    });
  }

  for (let i = 0; i < questions.length; i++) {
    questions[i].addEventListener('click', closeOpenAnswer);
  }
});

function hideHeader() {
  const header = document.querySelector('header');
  header.classList.add('header--is-hidden');
}

function showHeader() {
  const header = document.querySelector('header');
  header.classList.remove('header--is-hidden');
}

 // FAQ section
function closeOpenAnswer(element) {
  const className = 'faq__questions__item--is-open';
  const elementParent = element.target.parentNode;

  elementParent.classList.toggle(className)
}

function clearButton() {
  const buttons = document.querySelectorAll("[data-tab-button]");

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("shows__tabs__button--is-active");
  }
}

function hideTabs() {
  const tabsContainer = document.querySelectorAll("[data-tab-id]");

  for (let i = 0; i < tabsContainer.length; i++) {
    tabsContainer[i].classList.remove("shows__list--is-active");
  }
}
