
// Content Couse && Course_item
const slider = document.querySelector('.content_course');
let isDown = false;
let startX;
let scrollLeft ;

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
  
});

slider.addEventListener('mousemove', (e) => {
    if(!isDown) return ;
   e.preventDefault();
   const x = e.pageX - slider.offsetLeft;
   const walk = (x - startX) * 2;
   slider.scrollLeft = scrollLeft - walk;
});
// Scroller 
const scrollers = document.querySelectorAll(".slider_item");   
if(!window.matchMedia("(prefers-reduced-motion: reduce)").matches)
{
    addAnimation();
}
function addAnimation() 
{
   scrollers.forEach((scroller)=>{
    scroller.setAttribute("data-animated",true);
    const courseItem = scroller.querySelector('.course_item');
    const scrollerContent = Array.from(courseItem.children);
    scrollerContent.forEach(item =>{
        const duplicatedItem  = item.cloneNode(true);
        duplicatedItem.setAttribute("aria-hidden",true);
        courseItem.appendChild(duplicatedItem);
    })
   })
}