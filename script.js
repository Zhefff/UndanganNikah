document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('.section');
  
    function checkScroll() {
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const scrollY = window.pageYOffset;
        const windowHeight = window.innerHeight;
  
        if (scrollY > sectionTop - windowHeight + sectionHeight / 2 && scrollY < sectionTop + sectionHeight) {
          section.classList.add('active');
        } else {
          section.classList.remove('active');
        }
      });
    }
  
    window.addEventListener('scroll', checkScroll);
    checkScroll();
  });
  
// Set the date of the wedding
const weddingDate = new Date('2024-12-31T00:00:00');

// Update the countdown every second
const countdownTimer = setInterval(updateCountdown, 1000);

function updateCountdown() {
  const now = new Date().getTime();
  const distance = weddingDate - now;

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Update the HTML with the calculated values
  document.getElementById('days').innerText = days;
  document.getElementById('hours').innerText = hours;
  document.getElementById('minutes').innerText = minutes;
  document.getElementById('seconds').innerText = seconds;

  // If the countdown is over, clear the interval
  if (distance < 0) {
    clearInterval(countdownTimer);
    document.getElementById('timer').innerHTML = '<span>It\'s our wedding day!</span>';
  }
}

// Handle form greetings submission
// Initialize Firebase
var firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

firebase.initializeApp(firebaseConfig);

// Reference to the Firestore database
var db = firebase.firestore();

document.addEventListener('DOMContentLoaded', function () {
  var greetingForm = document.getElementById('greeting-form');
  
  greetingForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    var name = document.getElementById('sender-name').value;
    var message = document.getElementById('greeting-message').value;

    // Add a new document with a generated ID to the "comments" collection
    db.collection("comments").add({
        name: name,
        message: message
      })
      .then(function (docRef) {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });

    // Clear form fields
    greetingForm.reset();
  });
});

function copyBankDetails() {
  const bankDetails = document.querySelector('.bank-details-number').innerText;
  navigator.clipboard.writeText(bankDetails);
  alert('Bank details copied!');
}

// ......................................................MUSIC...................................................
function togglePlayPause() {
  var audio = document.getElementById("background-music");
  var playIcon = document.getElementById("play-icon");
  var pauseIcon = document.getElementById("pause-icon");

  if (audio.paused) {
    audio.play();
    playIcon.style.display = "none";
    pauseIcon.style.display = "inline-block";
  } else {
    audio.pause();
    playIcon.style.display = "inline-block";
    pauseIcon.style.display = "none";
  }
}





