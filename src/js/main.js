document.querySelector(".save").addEventListener("click", function() {
  window.localStorage.setItem(
    "agreement",
    document.querySelector(".writing").innerHTML
  );
});
document.querySelector(".print").addEventListener("click", function() {
  document.querySelector(".buttons").style.display = "none";
  document.querySelector(".help-buttons").style.display = "none";
  document.querySelector(".welcome-header").style.display = "none";
  document.title = "Made with agreement.netlify.com";
  window.print();
  document.title = "Agreement form";
  document.querySelector(".buttons").style.display = "block";
  document.querySelector(".help-buttons").style.display = "block";
  document.querySelector(".welcome-header").style.display = "block";
});