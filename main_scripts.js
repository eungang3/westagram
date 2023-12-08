"use strict";

// main
const replyInput = document.getElementById('reply-input');
const replyBtn = document.getElementsByClassName("reply-btn")[0];
const replyForm = document.getElementById("reply-form");
const replies = document.getElementsByClassName("replies")[0];

replyForm.addEventListener('keyup', function(){
    if (replyInput.value){
        replyBtn.disabled = false;
    }
    else {
        replyBtn.disabled = true;
    }
})

replyForm.addEventListener("submit", function (event) {
    event.preventDefault();

    let newReply = document.createElement('div');
    newReply.setAttribute('class', 'reply-content');
    newReply.innerHTML = `
    <a href="#"><p class="username">coding_js</p></a>
    <p class="text">${replyInput.value }</p>
    <img src="images/heart.png" alt="heart icon" class="heart" />
    `

    replies.appendChild(newReply);
  });
