// Handle Button Clicks

// Function to change the background color when a button is clicked
function changeBackgroundColor() {
  // Implement the function to change background color
  // List of colors that produce valid rgb() when set
  const colors = [
    'rgb(255, 0, 0)',     // red
    'rgb(0, 255, 0)',     // green  
    'rgb(0, 0, 255)',     // blue
    'rgb(255, 255, 0)',   // yellow
    'rgb(255, 0, 255)',   // magenta
    'rgb(0, 255, 255)',   // cyan
    'rgb(128, 0, 0)',     // maroon
    'rgb(0, 128, 0)',     // dark green
    'rgb(0, 0, 128)',     // navy
    'rgb(128, 128, 0)',   // olive
    'rgb(128, 0, 128)',   // purple
    'rgb(0, 128, 128)',   // teal
    'rgb(255, 165, 0)',   // orange
    'rgb(255, 192, 203)', // pink
    'rgb(165, 42, 42)',   // brown
    'rgb(128, 128, 128)'  // gray
  ];
  
  const randomIndex = Math.floor(Math.random() * colors.length);
  document.body.style.backgroundColor = colors[randomIndex];
}

// Function to reset the background color when the body is double-clicked
function resetBackgroundColor() {
  // Implement the function to reset background color
  document.body.style.backgroundColor = '';
}

// Capture Keyboard Input

// Function to display the key pressed by the user
function displayKeyPress(event) {
  // Implement the function to display key pressed
  const display = document.getElementById('keyPressDisplay');
  if (display) {
    display.textContent = `Key pressed: ${event.key}`;
  }
}

// Process Text Input

// Function to display user input in real-time
function displayUserInput() {
  // Implement the function to display user input
  const input = document.getElementById('textInput');
  const display = document.getElementById('textInputDisplay');
  if (input && display) {
    display.textContent = input.value ? `You typed: ${input.value}` : 'Your input will be displayed here.';
  }
}

// Attach Event Listeners
function setupEventListeners() {
  // Attach event listener to change background color when the button is clicked
  document
    .getElementById('changeColorButton')
    .addEventListener('click', changeBackgroundColor)

  // Attach event listener to reset background color when the body is double-clicked
  document
    .getElementById('resetColorButton')
    .addEventListener('dblclick', resetBackgroundColor)

  // Attach event listener to display key pressed when a key is pressed down
  document.addEventListener('keydown', displayKeyPress)

  // Attach event listener to display user input in real-time as they type
  document.getElementById('textInput').addEventListener('input', displayUserInput)
}

// Initialize event listeners when the DOM is loaded
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', setupEventListeners)
}
module.exports = {
  changeBackgroundColor,
  resetBackgroundColor,
  displayKeyPress,
  displayUserInput,
  setupEventListeners,
}