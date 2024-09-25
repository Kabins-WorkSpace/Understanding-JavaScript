let gamingButton;
function toggleButton(toggleButton) {
  const gamingButton = document.querySelector(toggleButton);
  if (gamingButton.classList.contains('isToggled')) {
    gamingButton.classList.remove('isToggled');
  }
  else
    gamingButton.classList.add('isToggled');
}