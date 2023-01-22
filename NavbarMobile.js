const menuButton = document.querySelector(".menu-hamburger");
const menuLinks = document.querySelector(".menu-links");

let isOpen = false;

menuButton.addEventListener("click", () => {
  
  if (!isOpen) {
    
    isOpen = true;
    menuLinks.classList.add("menu-links-reveal");
    menuLinks.classList.remove("menu-links-hide");
    
  } else {
    
    isOpen = false;
    menuLinks.classList.remove("menu-links-reveal");  
    menuLinks.classList.add("menu-links-hide");
    
  }
});
