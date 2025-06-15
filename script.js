function showVelocimetro() {
  document.getElementById("velocimetro").style.display = "block";
}

function hideVelocimetro() {
  document.getElementById("velocimetro").style.display = "none";
}

function setSpeed(kmh) {
  document.getElementById("speed").innerText = kmh;
}

// Chamadas acessíveis pelo SAMP
window.showVelocimetro = showVelocimetro;
window.hideVelocimetro = hideVelocimetro;
window.setSpeed = setSpeed;
