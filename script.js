// Navigation scroll on click
document.querySelectorAll('header nav a').forEach(link => {

    link.addEventListener('click', e => {
      e.preventDefault();
      
      let target = document.querySelector(link.hash);
      target.scrollIntoView({
        behavior: 'smooth'
      });
    });
  
  });