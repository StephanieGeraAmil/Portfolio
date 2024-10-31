const phrases = [
    "I'm a full-stack developer.",
    "Software Engineer.",
    "Your next project could use my skills!",
    // "I'm a dog lover.",
      // "I'm a photographer.",
    // "I find joy in serving others and making a difference."
];

let phraseIndex = 0; // To keep track of the current phrase
let charIndex = 0; // To keep track of the current character in the phrase
const typingElement = document.getElementById("typing");

function type() {
    if (charIndex < phrases[phraseIndex].length) {
        typingElement.textContent += phrases[phraseIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 100); // Typing speed
    } else {
        setTimeout(deleteText, 1000); // Pause before deleting
    }
}

function deleteText() {
    if (charIndex > 0) {
        typingElement.textContent = phrases[phraseIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(deleteText, 50); // Deleting speed
    } else {
        phraseIndex = (phraseIndex + 1) % phrases.length; // Move to the next phrase
        setTimeout(type, 500); // Pause before typing the next phrase
    }
}

// Start the typing effect
console.log("starting to type");
type();
