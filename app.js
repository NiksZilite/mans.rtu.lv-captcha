  const white_plane = document.getElementById("transition");

document.addEventListener("DOMContentLoaded", function () {
  const image_grid = document.getElementById("image_grid");
  const squares = image_grid.getElementsByClassName("square");

  for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click", function () {
      this.classList.toggle("active");
    });
  }
});


document.addEventListener('keydown', function(event) {

    if (event.key === 'Enter') {
        window.location.href = "jas566aa-j657-414ja-54ja-ajd4adg12.html";
    }
});


function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function FadeIn() {
    delay(500).then(() => {
    white_plane.style.visibility = "hidden";
    });
}