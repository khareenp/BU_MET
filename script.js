
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('focus', event => {
      event.target.style.color = 'red';
    });
  });