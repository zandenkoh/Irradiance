document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.sidebar-list a');
  
    links.forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
  
        const href = this.getAttribute('href');
        const targetElement = document.querySelector(href);
        const offset = targetElement.offsetTop - (window.innerHeight * 0.095);
  
        scroll({
          top: offset,
          behavior: 'smooth'
        });
      });
    });
  });