function goToStep(stepNumber) {
  for (let i = 1; i <= 4; i++) {
    document.getElementById("step" + i).classList.add("hidden");
  }
  document.getElementById("step" + stepNumber).classList.remove("hidden");
}
