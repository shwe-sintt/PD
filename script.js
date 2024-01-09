const audioElement = document.getElementById("play");

function playAudio() {
  audioElement.play();
  document.getElementById("reply-name").innerHTML =
    document.getElementById("name").value;
}