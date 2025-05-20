document.addEventListener("DOMContentLoaded", function () {
  const text = "Coming Soon";
  const speed = 100;
  let i = 0;
  const target = document.getElementById("typing");
  const spinner = document.getElementById("spinner");

  function typeWriter() {
    if (i < text.length) {
      target.innerHTML += text.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    } else {
      // After typing completes, move spinner after a short pause
      setTimeout(() => {
        spinner.classList.add("move-up-fade");

        // Optional: remove spinner from DOM after animation
        setTimeout(() => {
          spinner.remove();
        }, 1000); // match animation duration
      }, 500); // wait half a second after typing
    }
  }

  // Add 10-second delay before starting
  setTimeout(() => {
    typeWriter();
  }, 10000);
});
