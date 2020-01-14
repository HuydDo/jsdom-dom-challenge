document.addEventListener("DOMContentLoaded", () => {

  // counter inner text
  let counter = document.querySelector("#counter")
  
  //timer increment every second once the page has loaded
  let count = setInterval(function () {
    counter.innerText++;
  }, 1000);

  // DOM elements
  let minus = document.getElementById("minus")
  let plus = document.getElementById("plus")
  let love = document.getElementById("heart")
  let pause = document.getElementById("pause")
  let likes = document.querySelector(".likes")

  let submitBtn = document.querySelector("#submit")
  let commentList = document.querySelector("#list")
    

  // minus button
  minus.addEventListener("click", function(e){
    counter.innerText--;
  });

  // plus button
  plus.addEventListener("click", function(e){
    counter.innerText++;
  });

   //pause
   pause.addEventListener("click", function(e){
     if (pause.innerText == "pause"){
      pause.innerText = "resume"
      clearInterval(count)
      plus.disabled = true;
      minus.disabled = true;
      love.disabled = true; 
      submitBtn.disabled = true;
     }
     else {
      count = setInterval(function () {
        counter.innerText++; 
      }, 1000);
      pause.innerText = "pause"
      plus.disabled = false;
      minus.disabled = false;
      love.disabled = false; 
      submitBtn.disabled = false;
     }
   });

   // love button
   love.addEventListener("click", function(e){
     let obj = document.getElementById(`${counter.innerText}`);
     obj ? obj.children[0].innerText++ : 
     likes.innerHTML += `<li id=${counter.innerText}>
                        ${counter.innerText} is liked
                        <span id=${counter.innerText}>1</span> times.</li>`
   })

   // submit comments button
   submitBtn.addEventListener("click", function(e){
     e.preventDefault();
     let comment = document.querySelector("#comment-form > input[type=text]").value
     commentList.innerHTML += `<li>${comment}</li>`
   })
});


/*
As a user, I should see the timer increment every second once the page has loaded.
As a user, I can manually increment and decrement the counter using the plus and minus buttons.
As a user, I can 'like' an individual number of the counter. I should see count of the number of 'likes' associated with that number.
As a user, I can pause the counter, which should pause the counter
disable all buttons except the pause button the pause button should then show the text "resume."
When 'resume' is clicked, it should restart the counter and re-enable the buttons.

As a user, I can leave comments on my gameplay, such as: "Wow, what a fun game this is."
*/