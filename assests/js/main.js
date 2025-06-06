const navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}
const navLink = document.querySelectorAll('.nav__link');
function linkAction() {
  const navMenu = document.getElementById('nav-menu');
  navMenu.classList.remove('show-menu');
}
navLink.forEach((n) => n.addEventListener('click', linkAction));

function scrollHeader() {
  const header = document.getElementById("header");
  if (this.scrollY >= 50) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

var mixerProjects = mixitup(".projects__container", {
  selectors: {
    target: ".project__item",
  },
  animation: {
    duration: 300,
  },
});


const linkWork = document.querySelectorAll(".category__btn");

function activeWork() {
  linkWork.forEach((a) => a.classList.remove("active-work"));
  this.classList.add("active-work");
}

linkWork.forEach((a) => a.addEventListener("click", activeWork));

const contactForm = document.getElementById("contact-form"),
  contactName = document.getElementById("contact-name"),
  contactEmail = document.getElementById("contact-email"),
  Message = document.getElementById("message"),
  contactMessage = document.getElementById("contact-message");

const sendEmail = (e) => {
  e.preventDefault();

  if (
    contactName.value === "" ||
    contactEmail.value === "" ||
    Message.value === ""
  ) {
    contactMessage.classList.remove("color-light");
    contactMessage.classList.add("color-dark");
    contactMessage.textContent = "Please fill in all fields";
  } else {
    emailjs
      .sendForm(
        "service_es6qep7",
        "template_9juyjdj",
        "#contact-form",
        "IqGRiNBgDopaqTln3"
      )
      .then(
        () => {
          contactMessage.classList.add("color-dark");
          contactMessage.textContent = "Message sent ✔";
          setTimeout(() => {
            contactMessage.textContent = "";
          }, 5000);
        },
        (error) => {
          alert("Oops! Something went wrong. Please try again later.", error);
        }
      );
    contactName.value = "";
    contactEmail.value = "";
    Message.value = "";
  }
};

contactForm.addEventListener("submit", sendEmail);
