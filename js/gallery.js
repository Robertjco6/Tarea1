function upDate(previewPic) {
  // 1) Find the big frame
  var frame = document.getElementById("image");

  // 2) Use the hovered image's file as the frame's background
  frame.style.backgroundImage = "url('" + previewPic.src + "')";

  // 3) Show the hovered image's alt text in the frame
  frame.innerHTML = previewPic.alt;
}

function unDo() {
  var frame = document.getElementById("image");

  // 1) Put the background back to the original (empty) value from the CSS
  frame.style.backgroundImage = "url('')";

  // 2) Put the original text back (copied from the HTML)
  frame.innerHTML = "Pase el cursor sobre una imagen para mostrarla aqui.";
}