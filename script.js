"use strict";

const btnLeft = document.querySelector(".btn-left");
const btnRight = document.querySelector(".btn-right");
const image = document.querySelector(".profile-img");
const quote = document.querySelector(".quote");
const fullName = document.querySelector(".name");
const title = document.querySelector(".position");

const users = [
  {
    name: "Tanya Sinclair",
    position: "UX Engineer",
    blockquote:
      '"I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job  of my dreams and so excited about the future."',
    image: " ./images/image-tanya.jpg",
  },

  {
    name: "John Tarkpor",
    position: "Junior Front-end Developer",
    blockquote:
      '"If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer."',
    image: " ./images/image-john.jpg",
  },
];

btnRight.addEventListener("click", function () {
  image.src = users[1].image;
  quote.innerHTML = users[1].blockquote;
  fullName.innerHTML = users[1].name;
  title.innerHTML = users[1].position;
});

btnLeft.addEventListener("click", function () {
  image.src = users[0].image;
  quote.innerHTML = users[0].blockquote;
  fullName.innerHTML = users[0].name;
  title.innerHTML = users[0].position;
});
