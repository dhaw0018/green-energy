// Define the pieces as an object
const pieces = {
  1: {
    title: "Hydro Power",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    image: "./images/water1.jpg" 
},
  2: {
    title: "Solar Power",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    image: "./images/solar2.jpg" 
},
  3: {
      title: "Wind Power",
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
      image: "./images/wind1.jpg" 
  },
  }
  const buttons = document.querySelectorAll(".button-group button");
  const content = document.querySelector("#content");
   buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        buttons.forEach(function(button) {
            button.classList.remove("active-button");
        });
        button.classList.add("active-button");
const id = button.getAttribute("id").slice(-1);
const piece = pieces[id];
content.innerHTML = `
<h2>${piece.title}</h2>
<img src="${piece.image}" alt="${piece.title} Image">
<p>${piece.content}</p>`;

    });
  });

buttons[0].classList.add("active-button");

const mediaQuery = window.matchMedia('(min-width: 30rem)');
const container = document.querySelector('.container');
const masthead = document.querySelector('.masthead');

function handleMediaQuery(mediaQuery) {
if (mediaQuery.matches) {
  container.style.fontSize = '1.2rem';
  masthead.style.height = '50vh';
} else {
  container.style.fontSize = '1rem';
  masthead.style.height = '30rem';
}
}

handleMediaQuery(mediaQuery);
mediaQuery.addListener(handleMediaQuery);
