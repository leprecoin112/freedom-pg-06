function openModal(){document.getElementById("myModal").style.display="block"}function closeModal(){document.getElementById("myModal").style.display="none"}var slideIndex=1;function plusSlides(e){showSlides(slideIndex+=e)}function currentSlide(e){showSlides(slideIndex=e)}function showSlides(e){var l,s=document.getElementsByClassName("mySlides"),d=document.getElementsByClassName("dot");for(e>s.length&&(slideIndex=1),e<1&&(slideIndex=s.length),l=0;l<s.length;l++)s[l].style.display="none";for(l=0;l<d.length;l++)d[l].className=d[l].className.replace(" active","");s[slideIndex-1].style.display="block",d[slideIndex-1].className+=" active",captionText.innerHTML=d[slideIndex-1].alt}showSlides(slideIndex);
//# sourceMappingURL=index.bf9ee8a5.js.map
