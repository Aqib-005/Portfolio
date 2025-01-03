// Typing Effect for Name
const name = "> Aqib Shihan ‎"; // Add '>' before the name
const typingElement = document.getElementById("typing-effect");
let index = 0;

function typeName() {
  if (index < name.length) {
    typingElement.textContent += name.charAt(index);
    index++;
    setTimeout(typeName, 100); // Adjust typing speed (100ms per character)
  }
}

// Start typing animation when the page loads
window.onload = typeName;
