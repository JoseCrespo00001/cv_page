


const button = document.getElementById("btn");
const hero = document.getElementById("hero");
let heroStyle = getComputedStyle(hero);

button.onclick = () => {
  if (heroStyle.backgroundColor === "rgb(239, 244, 253)") {
    // dark mode
    button.style.backgroundColor = "#eed";
    button.style.color = "black";
    button.innerHTML = "Light";
    document.documentElement.style.setProperty("--mode", "rgb(33, 33, 33)");
    document.documentElement.style.setProperty("--main-color", "#eed");
    document.documentElement.style.setProperty("--btn-color", "#212121");
  } else {
    // light mode
    button.style.backgroundColor = "#212121";
    button.style.color = "white";
    button.innerHTML = "Dark";
    document.documentElement.style.setProperty("--mode", "rgb(239, 244, 253)");
    document.documentElement.style.setProperty("--main-color", "#212121");
    document.documentElement.style.setProperty("--btn-color", "#eed");
  }
};


//const burger = document.querySelector(".burger");
//const navLinks = document.querySelector(".nav-links");

//burger.addEventListener('click', () => {
//  navLinks.classList.toggle('active');
//});
//document.addEventListener('click', (event) => {
//  if (!event.target.closest('.nav-links') && !event.target.closest('.burger')) {
//    navLinks.classList.remove('active');
//  }
//});



const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav-links");
const navLinksList = document.querySelectorAll(".nav-links li");

burger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

navLinksList.forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

document.addEventListener('click', (event) => {
  if (!event.target.closest('.nav-links') && !event.target.closest('.burger')) {
    navLinks.classList.remove('active');
  }
});



const form = document.querySelector('.contact_form');
const message = document.querySelector('.contact_message');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const formData = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    message.textContent = 'Thank you for your message!';
    message.classList.add('success');
  } catch (error) {
    message.textContent = 'There was an error sending your message.';
    message.classList.add('error');
  }
});








