const phrases=["I'm a full-stack developer.","Computer Science Engineer.","Your next project could use my skills!","I'm a dog lover.","Amateur photographer.","I find joy in serving others and making a difference."];let phraseIndex=0,charIndex=0;const typingElement=document.getElementById("typing");function type(){charIndex<phrases[phraseIndex].length?(typingElement.textContent+=phrases[phraseIndex].charAt(charIndex),charIndex++,setTimeout(type,100)):setTimeout(deleteText,1e3)}function deleteText(){charIndex>0?(typingElement.textContent=phrases[phraseIndex].substring(0,charIndex-1),charIndex--,setTimeout(deleteText,50)):(phraseIndex=(phraseIndex+1)%phrases.length,setTimeout(type,500))}console.log("starting to type"),type();
//# sourceMappingURL=index.6c70c965.js.map