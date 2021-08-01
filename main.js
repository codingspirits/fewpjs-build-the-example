/* // Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const glyphStates = {
  "♡": "♥",
  "♥": "♡"
};
const colorStates = {
  "red" : "",
  "": "red"
};
const articleHearts = document.querySelectorAll(".like-glyph");
function likeCallback(e) {
  const heart = e.target;
  mimicServerCall("bogusUrl")
   //OR: mimicServerCall("bogusUrl", {forceFailure: true})
    .then(function(serverMessage){
       heart.innerText = glyphStates[heart.innerText];
       heart.style.color = colorStates[heart.style.color];
    })
    .catch(function(error) {
      // Basic
      // alert("Something went wrong!");
      // or....
      document.getElementById("modal").className = "";
      const modal = document.getElementById("modal");
      modal.className = "";
      modal.innerText = error;
      setTimeout(() =>  modal.className = "hidden", 3000);
    });
}

for (const glyph of articleHearts) {
  glyph.addEventListener("click", likeCallback);
} */
//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------
/* function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      const isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
 */
// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
testFunc()

function testFunc() {
  let likes = document.getElementsByClassName('like')
  for (let el of likes) {
    el.addEventListener('click', () => {
      const heart = el.getElementsByTagName('span')[0]
      const modal = document.getElementById('modal')
      const modalMessage = document.getElementById('modal-message')

      if (heart.textContent === FULL_HEART) {
        heart.textContent = EMPTY_HEART
        heart.classList.remove('activated-heart')
        return
      }

      mimicServerCall()
      .then(() => {
        heart.classList.add('activated-heart')
        heart.textContent = FULL_HEART
      })
      .catch(error => {
        modal.classList.remove('hidden')
        modalMessage.textContent = error 

        setTimeout(() => {
          modal.classList.add('hidden')
        }, 5000)
      })
    })
  }
}

//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------
function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
