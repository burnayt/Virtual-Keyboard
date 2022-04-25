let burgerIcon = document.querySelector('.burger-icon');
let burgerPanel = document.querySelector('.burger-panel');
let burgerOverlay = document.querySelector('.burger-overlay');

function toggleBurgerMenu(){
    burgerPanel.style.left = `${window.innerWidth}px`;   
    burgerPanel.classList.toggle('move-left');
    burgerIcon.classList.toggle('rotate');
    burgerOverlay.classList.toggle('visible');
    document.body.classList.toggle('overflow-hidden')
}

burgerIcon.addEventListener('click', function(e) {
    toggleBurgerMenu();
    
})
burgerOverlay.addEventListener('click', function(e) {
    toggleBurgerMenu();
})

window.addEventListener('resize', function()
{
            burgerPanel.style.left = `${window.innerWidth}px`;
            
})
burgerPanel.addEventListener('click', function(e) {
    if (e.target.tagName == 'A'){
        toggleBurgerMenu();
    }
})
document.addEventListener('DOMContentLoaded', function(){
    
    burgerPanel.style.left = `${window.innerWidth}px`;

})

