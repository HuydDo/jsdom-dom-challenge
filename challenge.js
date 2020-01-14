document.addEventListener("DOMContentLoaded", () => {

  // counter inner text
  let counter = document.querySelector("#counter")

  // runs counter every second
  let count = setInterval(function () {
    counter.innerText++;
  }, 1000);
});


/*
As a user, I should see the timer increment every second once the page has loaded.
As a user, I can manually increment and decrement the counter using the plus and minus buttons.
As a user, I can 'like' an individual number of the counter. I should see count of the number of 'likes' associated with that number.
As a user, I can pause the counter, which should
pause the counter
disable all buttons except the pause button
the pause button should then show the text "resume."
When 'resume' is clicked, it should restart the counter and re-enable the buttons.

As a user, I can leave comments on my gameplay, such as: "Wow, what a fun game this is."
*/