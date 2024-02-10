// sliding corousel

let currentIndex = 0;

function showSlide(index) {
  const slider = document.querySelector(".slider");
  const slides = document.querySelectorAll(".slide");
  const totalSlides = slides.length;

  if (index >= totalSlides) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = totalSlides - 1;
  } else {
    currentIndex = index;
  }

  const translateValue = -currentIndex * 100 + "%";
  slider.style.transform = "translateX(" + translateValue + ")";
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

function prevSlide() {
  showSlide(currentIndex - 1);
}

// Auto slide change every 5 seconds
setInterval(nextSlide, 5000);

// let currentIndex = 0;
// let slideInterval;

// function showSlide(index) {
//     // ... (your existing code)

//     const translateValue = -currentIndex * 100 + '%';
//     slider.style.transform = 'translateX(' + translateValue + ')';
// }

// function nextSlide() {
//     showSlide(currentIndex + 1);
// }

// function prevSlide() {
//     showSlide(currentIndex - 1);
// }

// function startSlideShow() {
//     slideInterval = setInterval(nextSlide, 5000);
// }

// function stopSlideShow() {
//     clearInterval(slideInterval);
// }

// // Start the slideshow
// startSlideShow();

// Stop the slideshow when needed (e.g., if user interacts with navigation buttons)
// Uncomment the line below and call stopSlideShow() where needed
// stopSlideShow();

//copyright

const currentYear = new Date().getFullYear();
document.getElementById(
  "copyright"
).innerHTML = `&copy; Copyright Yalda Rwanda Foundation ${currentYear} | Design by <a href="https://instagram.com/iwmvictor">Iwmvictor</a>`;

//popups
document.addEventListener("DOMContentLoaded", function () {
  var readMoreLinks = document.querySelectorAll(".read-more-link");
  var popup = document.getElementById("popup");
  var closeBtn = document.getElementById("close");

  readMoreLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      popup.style.display = "block";
    });
  });

  closeBtn.addEventListener("click", function () {
    popup.style.display = "none";
  });

  window.addEventListener("click", function (event) {
    if (event.target == popup) {
      popup.style.display = "none";
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var readMoreLinks = document.querySelectorAll(".read-more-link1");
  var popup = document.getElementById("popup1");
  var closeBtn = document.getElementById("close");

  readMoreLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      popup.style.display = "block";
    });
  });

  closeBtn.addEventListener("click", function () {
    popup.style.display = "none";
  });

  window.addEventListener("click", function (event) {
    if (event.target == popup) {
      popup.style.display = "none";
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var readMoreLinks = document.querySelectorAll(".read-more-link2");
  var popup = document.getElementById("popup2");
  var closeBtn = document.getElementById("close");

  readMoreLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      popup.style.display = "block";
    });
  });

  closeBtn.addEventListener("click", function () {
    popup.style.display = "none";
  });

  window.addEventListener("click", function (event) {
    if (event.target == popup) {
      popup.style.display = "none";
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Donate button
  var donateBtn = document.getElementById("donate-btn");
  var donateModal = document.getElementById("donate-modal");
  var donateClose = document.getElementById("donate-close");

  donateBtn.addEventListener("click", function (event) {
    event.preventDefault();
    donateModal.style.display = "block";
  });

  donateClose.addEventListener("click", function () {
    donateModal.style.display = "none";
  });

  window.addEventListener("click", function (event) {
    if (event.target == donateModal) {
      donateModal.style.display = "none";
    }
  });

  // Volunteer button
  var volunteerBtn = document.getElementById("volunteer-btn");
  var volunteerModal = document.getElementById("volunteer-modal");
  var volunteerClose = document.getElementById("volunteer-close");

  volunteerBtn.addEventListener("click", function (event) {
    event.preventDefault();
    volunteerModal.style.display = "block";
  });

  volunteerClose.addEventListener("click", function () {
    volunteerModal.style.display = "none";
  });

  window.addEventListener("click", function (event) {
    if (event.target == volunteerModal) {
      volunteerModal.style.display = "none";
    }
  });
});
