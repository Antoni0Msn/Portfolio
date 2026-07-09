  document.getElementById('year').textContent = new Date().getFullYear();

  const text = "https://api.dev/antonio";
  const typedEl = document.getElementById('typed');
  const cursorEl = document.getElementById('cursor');
  const responseEl = document.getElementById('response');
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function typeOut(){
    if(prefersReduced){
      typedEl.textContent = text;
      responseEl.classList.add('show');
      cursorEl.style.display = 'none';
      return;
    }
    let i = 0;
    const interval = setInterval(() => {
      typedEl.textContent = text.slice(0, i+1);
      i++;
      if(i === text.length){
        clearInterval(interval);
        setTimeout(() => {
          responseEl.classList.add('show');
          cursorEl.style.opacity = '0.4';
        }, 300);
      }
    }, 45);
  }

  window.addEventListener('DOMContentLoaded', () => setTimeout(typeOut, 400));