document.addEventListener("DOMContentLoaded", () => {
  const messages = document.querySelectorAll(".message");
  let currentIndex = 0;

  function showMessage(index) {
    messages.forEach((msg, i) => {
      msg.classList.remove("active");
      if (i === index) {
        msg.classList.add("active");
      }
    });
  }

  showMessage(currentIndex); // Show first message
  setInterval(() => {
    currentIndex = (currentIndex + 1) % messages.length;
    showMessage(currentIndex);
  }, 4000); // Change message every 4 seconds
});
