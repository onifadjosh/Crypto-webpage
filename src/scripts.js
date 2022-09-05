document.addEventListener("DOMContentLoaded", () => {
    function counter(id, start, end, duration) {
     let obj = document.getElementById(id),
      current = start,
      range = end - start,
      increment = end > start ? 1 : -1,
      step = Math.abs(Math.floor(duration / range)),
      timer = setInterval(() => {
       current += increment;
       obj.textContent = current;
       if (current == end) {
        clearInterval(timer);
       }
      }, step);
    }
    counter("count1", 0, 30, 30);
    counter("count2", 0,10, 10);
    counter("count3", 40, 192, 192);
   });

   

   const hamburger = document.querySelector(".hamburger");
   const navMenu = document.querySelector(".nav-menu");
   
   hamburger.addEventListener("click", () => {
     hamburger.classList.toggle("active");
     navMenu.classList.toggle("active");
   })
   
   document.querySelectorAll("nav-link").forEach(n => n.
     addEventListener("click", () => {
       hamburger.classList.remove("active");
       navContent.classList.remove("active");
     }))